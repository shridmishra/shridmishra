"use client"
import React, { useState, useEffect } from 'react';

interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface GitHubContributionGraphProps {
  githubToken?: string;
  username?: string;
  className?: string;
}

const GitHubContributionGraph: React.FC<GitHubContributionGraphProps> = ({
  githubToken,
  username = 'shridmishra',
  className = ''
}) => {
  const [contributionData, setContributionData] = useState<ContributionWeek[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hoveredDay, setHoveredDay] = useState<{ x: number; y: number; content: string } | null>(null);

  // Generate mock data for demonstration
  const generateMockData = () => {
    const weeks: ContributionWeek[] = [];
    const today = new Date();
    const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());

    // Start from the beginning of the week containing one year ago
    const startDate = new Date(oneYearAgo);
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const currentDate = new Date(startDate);
    let totalContribs = 0;

    for (let week = 0; week < 53; week++) {
      const contributionDays: ContributionDay[] = [];

      for (let day = 0; day < 7; day++) {
        if (currentDate <= today) {
          // Generate random contribution count (weighted towards lower numbers)
          const rand = Math.random();
          let contributionCount = 0;

          if (rand > 0.7) contributionCount = Math.floor(Math.random() * 3) + 1;
          else if (rand > 0.85) contributionCount = Math.floor(Math.random() * 5) + 4;
          else if (rand > 0.95) contributionCount = Math.floor(Math.random() * 10) + 8;

          totalContribs += contributionCount;

          contributionDays.push({
            date: currentDate.toISOString().split('T')[0],
            contributionCount,
            color: contributionCount === 0 ? '#161b22' : '#39d353'
          });
        }

        currentDate.setDate(currentDate.getDate() + 1);
      }

      if (contributionDays.length > 0) {
        weeks.push({ contributionDays });
      }
    }

    setContributionData(weeks);
    setTotalContributions(totalContribs);
    setLoading(false);
  };

  useEffect(() => {
    if (githubToken) {
      fetchContributionData();
    } else {
      generateMockData();
    }
  }, [githubToken, username]);

  const fetchContributionData = async () => {
    if (!githubToken) return;

    setLoading(true);
    try {
      const query = `
        query($username: String!) {
          user(login: $username) {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                    color
                  }
                }
              }
            }
          }
        }
      `;

      const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${githubToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables: { username }
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.errors) {
        throw new Error(data.errors[0].message);
      }

      const calendar = data.data.user.contributionsCollection.contributionCalendar;
      setContributionData(calendar.weeks);
      setTotalContributions(calendar.totalContributions);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
      setLoading(false);
    }
  };

  const getContributionIntensity = (count: number) => {
    if (count === 0) return 'bg-foreground/10 border-none';
    if (count <= 2) return 'bg-foreground/25 border-none';
    if (count <= 5) return 'bg-foreground/50 border-none';
    if (count <= 8) return 'bg-foreground/75 border-none';
    return 'bg-foreground border-none';
  };

  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const getMonthLabels = () => {
    const labels: { month: string; position: number }[] = [];
    
    contributionData.forEach((week, weekIndex) => {
      if (week.contributionDays.length === 0) return;

      const firstDay = new Date(week.contributionDays[0].date);
      
      // Add label when month changes or for the first week
      if (weekIndex === 0 || (weekIndex > 0 && firstDay.getDate() <= 7)) {
        labels.push({
          month: monthNames[firstDay.getMonth()],
          position: weekIndex * 12 // 10px width + 2px gap per week
        });
      }
    });

    return labels;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  };

  const handleMouseEnter = (event: React.MouseEvent, day: ContributionDay) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const content = day.contributionCount === 0
      ? `No contributions on ${formatDate(day.date)}`
      : `${day.contributionCount} contribution${day.contributionCount !== 1 ? 's' : ''} on ${formatDate(day.date)}`;

    setHoveredDay({
      x: rect.left + rect.width / 2,
      y: rect.top - 8,
      content
    });
  };

  const handleMouseLeave = () => {
    setHoveredDay(null);
  };

  if (loading) {
    return (
      <div className={`bg-background p-4 rounded-sm ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-zinc-800 rounded mb-4 w-64"></div>
          <div className="flex gap-1 mb-4">
            {Array.from({ length: 53 }).map((_, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-1">
                {Array.from({ length: 7 }).map((_, dayIndex) => (
                  <div key={dayIndex} className="w-2.5 h-2.5 bg-zinc-800 border border-zinc-700 rounded-sm"></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`bg-background p-4 rounded-lg border border-red-800 ${className}`}>
        <div className="text-red-400 text-sm">⚠️ {error}</div>
        <div className="text-gray-500 text-xs mt-1">
          Please check your GitHub token and ensure it has &apos;read:user&apos; scope.
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-background p-4 rounded-lg ${className}`} style={{ width: 'fit-content' }}>
      {/* Month labels */}
    

      {/* Main graph container */}
      <div className="flex">
      

        {/* Contribution grid */}
        <div className="flex gap-1">
          {contributionData.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.contributionDays.map((day, dayIndex) => {
                const intensity = getContributionIntensity(day.contributionCount);

                return (
                  <div
                    key={dayIndex}
                    className={`w-2.5 h-2.5 border rounded-xs cursor-pointer transition-all duration-150 hover:border-gray-400 ${intensity}`}
                    onMouseEnter={(e) => handleMouseEnter(e, day)}
                    onMouseLeave={handleMouseLeave}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Tooltip */}
      {hoveredDay && (
        <div
          className="fixed z-50 px-2 py-1 text-xs text-white bg-gray-900 border border-gray-700 rounded shadow-lg pointer-events-none"
          style={{
            left: `${hoveredDay.x}px`,
            top: `${hoveredDay.y}px`,
            transform: 'translateX(-50%) translateY(-100%)'
          }}
        >
          {hoveredDay.content}
        </div>
      )}

      {/* Footer */}
      <div className="flex justify-between items-center mt-4">
        <div className="text-xs text-secondary">
          <span className="font-medium text-secondary">{totalContributions.toLocaleString()}</span> contributions in lifetime
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 text-xs text-secondary">
          <span>Less</span>
          <div className="flex gap-1">
            <div className="w-2.5 h-2.5 bg-gray-800 border border-zinc-700 rounded-sm"></div>
            <div className="w-2.5 h-2.5 bg-zinc-700 border border-zinc-600 rounded-sm"></div>
            <div className="w-2.5 h-2.5 bg-zinc-600 border border-zinc-500 rounded-sm"></div>
            <div className="w-2.5 h-2.5 bg-zinc-500 border border-zinc-400 rounded-sm"></div>
            <div className="w-2.5 h-2.5 bg-zinc-400 border border-zinc-300 rounded-sm"></div>
          </div>
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default GitHubContributionGraph;
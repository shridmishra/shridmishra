import React from 'react'
import GitHubContributionGraph from '@/src/components/bento/Github';
const githubToken = process.env.GITHUB_TOKEN;

const BentoGrid = () => {
  return (
    <div>
        <GitHubContributionGraph githubToken={githubToken}/>
    </div>
  )
}

export default BentoGrid;
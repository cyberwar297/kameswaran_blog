import { Link } from 'react-router-dom'
import { ideaRows } from '../data/ideas'

const trackingReasons = [
  'To remember what I was actually thinking before the details fade',
  'To notice when the same idea keeps showing up across unrelated research threads',
  'To turn a rough theory into something testable in the lab',
  'To share early thinking with people working on similar problems',
]

export default function Ideas() {
  return (
    <section className="ideas-page">
      <header className="ideas-header">
        <h1>Ideas</h1>
        <p className="ideas-subtitle">Working theories I want to keep track of</p>
      </header>

      <div className="ideas-intro">
        <p>Here is why I bother writing these down instead of letting them stay in my head:</p>
        <ol className="ideas-reasons">
          {trackingReasons.map((reason) => (
            <li key={reason}>{reason}</li>
          ))}
        </ol>
      </div>

      <p className="ideas-updated">Last updated: August 2026</p>

      <div className="ideas-topical">
        <h2>Topical Right Now</h2>
        <p>
          These ideas feel most relevant given where things stand today: agentic AI
          moving into production faster than review processes can keep up, detection
          programs straining under alert volume, and identity becoming the real
          perimeter for both humans and AI agents.
        </p>
      </div>

      <div className="ideas-table-wrap">
        <table className="ideas-table">
          <thead>
            <tr>
              <th>Idea</th>
              <th>Why it&apos;s relevant</th>
              <th>Reference</th>
            </tr>
          </thead>
          <tbody>
            {ideaRows.map((row) => (
              <tr key={row.idea}>
                <td>{row.idea}</td>
                <td>{row.reason}</td>
                <td>
                  <Link to={`/blog/${row.referenceSlug}`}>{row.referenceTitle}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

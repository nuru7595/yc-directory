export default function About() {
  return (
    <section>
      <h2 className="section-title">About</h2>
      <div className="section-container">
        <table className="w-full table-fixed">
          <tbody>
            <tr>
              <td>Started :-</td>
              <td>2 October 2025</td>
            </tr>
            <tr>
              <td>Last Modified :-</td>
              <td>10 October 2025</td>
            </tr>
            <tr>
              <td>Status :-</td>
              <td>Running...</td>
            </tr>
            <tr>
              <td>On Going :-</td>
              <td>8 Days</td>
            </tr>
            <tr>
              <td>Allocated Time :-</td>
              <td>6 Hours 33 Minutes</td>
            </tr>
            <tr>
              <td>Source :-</td>
              <td>
                <a
                  href="https://youtu.be/Zq5fmkH0T78"
                  target="_blank"
                  className="underline"
                >
                  Javascript Mastery
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

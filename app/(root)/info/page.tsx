export default function Info() {
  return (
    <section>
      <h2 className="section-title">Information</h2>
      <div className="section-container">
        <table className="w-full table-fixed">
          <tbody>
            <tr>
              <td>Started :-</td>
              <td>2 October 2025</td>
            </tr>
            <tr>
              <td>Last Modified :-</td>
              <td>8 October 2025</td>
            </tr>
            <tr>
              <td>Status :-</td>
              <td>Running...</td>
            </tr>
            <tr>
              <td>Allocated Time :-</td>
              <td>3 Hours 45 Minutes</td>
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

// import
import styles from "./InNumbers.module.scss"

// Const
const CURRENTNUMBER = [
  { id: "0", title: "Total A/R Processed", value: "15B$" },
  { id: "1", title: "Number of Invoices Managed", value: "4M+" },
  { id: "2", title: "Total Emails Sent", value: "2M+" },
  { id: "3", title: "Count of A/R Debtors Managed", value: "250K+" },
//   { id: "4", title: "% Collections to Receivables", value: "94%" },
];

// Main
export default function InNumberProp() {
  return (
    <>
      <section className="section section--min">
        <div>
          {/* Add if there is a header required */}

          {/* The Numbers are to be shown here */}
          <div className={`container ${styles.container}`}>
            {CURRENTNUMBER.map((item)=>(
            <div className={styles.card} key={item.id}>
                <p className={styles.value_p}>{item.value}</p>
                <h3 className={styles.header_h3}>{item.title}</h3>
            </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

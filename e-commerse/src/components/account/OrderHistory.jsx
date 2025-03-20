import classes from "./OrderHistory.module.css";

export default function OrderHistory() {
  return (
    <main className={classes.orderContainer}>
      <h3>Orders History</h3>
      <table className={classes.orderTable}>
        <thead className={classes.orderTableHead}>
          <tr className={classes.orderTableRow}>
            <td>Number Id</td>
            <td>Dates</td>
            <td>Status</td>
            <td>Price</td>
          </tr>
        </thead >
        <tbody className={classes.orderTableBody}>
          <tr className={classes.orderTableRow}>
            <td>#12341234</td>
            <td>October 17, 2023</td>
            <td>Delivered</td>
            <td> $1234.5</td>
          </tr>
          <tr className={classes.orderTableRow}>
            <td>#12341234</td>
            <td>October 17, 2023</td>
            <td>Delivered</td>
            <td> $1234.5</td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

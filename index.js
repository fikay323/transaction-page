const root = document.querySelector('.lower')
const transactions = [
  {
    name: "Sodiq Alabi Graham",
    date: "January 4, 2023",
    amount: 10000,
    type: "debit",
  },
  {
    name: "Oyeyiola Tofunmi Peace",
    date: "December 28, 2022",
    amount: 1000,
    type: "credit",
  },
  {
    name: "Adewolu Michael Ibukunoluwa",
    date: "December 26, 2022",
    amount: 5800,
    type: "debit",
  },
  {
    name: "Oyesikun Clement Adekunle",
    date: "December 25, 2022",
    amount: 75000,
    type: "credit",
  },
  {
    name: "Adegboyega Esther Tosin",
    date: "December 19, 2022",
    amount: 3100,
    type: "credit",
  },
  {
    name: "NIP TRANSCTIONS",
    date: "December 18, 2022",
    amount: 10.75,
    type: "debit",
  },
  {
    name: "Ajayi Esther Damilola",
    date: "December 8 2022",
    amount: 5600,
    type: "credit",
  },
  {
    name: "Alagbe Peace Damilare",
    date: "December 2 2022",
    amount: 7800,
    type: "credit",
  },
  {
    name: "Oyesola Grace Elizabeth",
    date: "November 30 2022",
    amount: 10800,
    type: "debit",
  },
];
transactions.forEach((transaction) => {
    const name = transaction.name
    const date = transaction.date
    const amount = transaction.amount
    const type = transaction.type
    const color = (type == 'credit') ? 'success' : 'danger';
    const sign = (type == 'credit') ? '+' : '-';
    root.innerHTML += `
        <div class="down d-flex gap-3 px-4 border-bottom border-dark">
            <img src="./images/transaction-logo.png" height="40px" alt="">
            <div class="middle d-flex flex-column">
                <p class="m-0">${name}</p>
                <p class="y2 m-0">${date}</p>
            </div>
            <p class="ms-auto text-success fw-bold text-${color}">${sign}₦${amount}</p>
        </div>
    `;
})
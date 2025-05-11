const shownav = document.querySelector('.ham-menu');

        const nav = document.querySelector('.off-screen-menu');

        shownav.addEventListener('click', () =>  {
            shownav.classList.toggle('active');
        nav.classList.toggle('active');
        })

async function fetchBalance(userId) {
    let response = await fetch(`185.199.108.153:3600/wallet/${userid}`);
    let data = await response.json();
    document.getElementById("walletBallance").innerText = data.balance;
}

async function depositMoney(amount) {
    let response = await fetch("185.199.108.153:3600/wallet/${userid}", {
        method: "POST",
        headers: { "content-Type": "application/json"},
        body: JSON.stringify({ user_id: 1, amount})
    });
    let data = await response.json();
    alert(data.message);
    fetchBalance(1);
}

fetchBalance(1);





const display_name = document.getElementById("add-name").innerHTML = name

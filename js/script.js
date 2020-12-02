

var data = [
    {
        quantity: 1.5,
        description: 'Stock Item Example 0001',
        unitPrice: 1000.00,
        amount: 1500.00
    },
    {
        quantity: 1,
        description: "Stock Item Example 0002",
        unitPrice: 2000.00,
        amount: 2000.00
    },
    {
        quantity: 1,
        description: "Service Charge Invoicing Item 001",
        unitPrice: 100.00,
        amount: 200.00
    },
    {
        quantity: 1,
        description: `Service Charge Invoicing Item 002<br/>
Additional line 1 for this item<br/>
Additional line 2 for this item`,
        unitPrice: 200.00,
        amount: 600.00
    }]


function renderDataTable() {
    data.forEach(function (item) {
        let dataRow = `<tr>
            <td class="data r">${item.quantity}</td>
            <td class="data">${item.description}</td>
            <td class="data r">${item.unitPrice}</td>
            <td class="data r">${item.amount}</td>
        </tr>`
        $('#dataTable').append(dataRow)
    })
}

function computeSubTotal() {
    console.log("computingSubTotal() runs...")
    var tt = 0
    var subtt = data.forEach(function (item) {
        tt += item.amount
    })
    $('#subTotal').html("" + tt)
}

function computeTax() {
    console.log("computing SaleTaxes runs...")
    var ttTax = 0
    var totalT = data.forEach(function (item) {
        taxDeducted = item.unitPrice * (7 / 100)
        ttTax += taxDeducted
    })
    $('#saleTax').html("" + ttTax)
}
function computeShipping() {
    console.log("computing shipping")
    var each = 0
    var eachShip = data.forEach(function (item) {
        each += 50
    })
    $('#shippingCost').html("" + each)
}

function computeSubdue() {

    let tt = $('#subTotal').text()
    let st = $('#saleTax').text()
    let sc = $('#shippingCost').text()
    let total = parseInt(tt) + parseInt(st) + parseInt(sc)
    $('#totalDue').html(total)
    console.log()

}




$(document).ready(function () {

    var count = 0;
    console.log("Hello World")


    renderDataTable()
    computeSubTotal()
    computeTax()
    computeShipping()
    computeSubdue()
    $('#tableBt').click(function () {
        console.log("Button Clicked")
        //$('subTotal').html("912.00")
        count++;
        let qty = prompt("Quantity")
        let d = prompt("Description")
        let p = prompt("Unit Price")
        let amt = parseFloat(qty) * parseFloat(p)
        console.log({ qty, d, p, amt })

        let obj = {
            quantity: qty,
            description: d,
            unitPrice: p,
            amount: amt
        }
        console.log({ obj })
        data.push(obj)
        let dataRow = `<tr>
            <td class="data r">${obj.quantity}</td>
            <td class="data">${obj.description}</td>
            <td class="data r">${obj.unitPrice}</td>
            <td class="data r">${obj.amount}</td>
        </tr>`
        $('#dataTable').append(dataRow)

        computeSubTotal()
        computeTax()
        computeShipping()
        computeSubdue()
    })

})

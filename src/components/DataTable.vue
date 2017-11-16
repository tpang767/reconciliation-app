<template>
  <div id="data-table">
    <div class="row" style="margin-bottom:10px">
      <button class="button actionBtn" @click="toggleEditMode">
        <span v-if="!editMode">New Transaction</span>
        <span v-else>Cancel</span>
      </button>
      <button v-if="editMode" class="button actionBtn" @click="addRecord" style="width:80px;">Save</button>
    </div>

    <table style="width:100%">
      <template v-for="column in columns">
        <col style="width:12.5%">
      </template>
      <thead>

        <tr>
          <th style="width: 25px;" v-for="column in columns">{{ column.header }}</th>
        </tr>

        <tr v-show="editMode" class="inline-editor">
          <th class="inlineForm" v-for="(val,key) in formInputs">
            <input :type="checkType(key)" v-model="formInputs[key]"></input>
          </th>
        </tr>

      </thead>
      <tbody>
        <tr v-for="item in items">
          <td>{{ item.date }}</td>
          <td>{{ item.category }}</td>
          <td>{{ item.vendor }}</td>
          <td>{{ item.expense }}</td>
          <td>{{ item.paidBy }}</td>
          <td>{{ item.owed }}</td>
          <td>{{ item.paymentStatus }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DataTable",
  data () {
    return {
      editMode: false,
      formInputs: {},
      inlineForms: [
        { val: 'date', model: 'newDate' }
      ],
      columns: [
        { header: 'Transaction Date', key: 'date' },
        { header: 'Category', key: 'category' },
        { header: 'Vendor', key: 'vendor' },
        { header: 'Expense', key: 'expense' },
        { header: 'Paid By', key: 'paidBy' },
        { header: 'Owed', key: 'owed' },
        { header: 'Payment Status', key: 'paymentStatus' }
      ],
      items: [
        { date: '9/21/2017', category: 'Groceries', vendor: 'Walmart', expense: 224, paidBy: 'Lina', owed: 132, paymentStatus: 'pending' },
        { date: '9/26/2017', category: 'Rent', vendor: 'Exchange', expense: 2400, paidBy: 'Lina', owed: 1200, paymentStatus: 'pending' }
      ]
    }
  },
  mounted () {
    this.resetForm()
  },
  methods: {
    checkType (field) {
      return (field === 'date') ? 'date' : 'text'
    },
    toggleEditMode (e) {
      this.editMode = (!!this.editMode) ? false : true
      if (e) {
        e.preventDefault()
      }
    },
    createRecord (entry) {
      const fields = Object.keys(entry)
      return fields.reduce((init, field) => {
        init[field] = entry[field]
        return init
      }, {})
    },
    resetForm () {
      this.formInputs = {
        date: '',
        category: '',
        vendor: '',
        expense: '',
        paidBy: '',
        owed: '',
        paymentStatus: ''
      }
    },
    addRecord () {
      const record = this.createRecord(this.formInputs)
      this.items.push(record)
      this.toggleEditMode()
      this.resetForm()
    }
  }
}
</script>

<style scoped>
tr.inline-editor th {
  background-color: white;
}

table,
th,
td {
  border: 1px solid lightgrey;
  text-align: left;
}

table {
  border-collapse: collapse;
  width: 100%;
  cellpadding: 0;
  cellspacing: 0;
}

tr:hover td {
  background-color: lightgoldenrodyellow;
  cursor: pointer;
}

td,
th {
  text-align: left;
  padding: 8px;
  height: 15px;
}


button.actionBtn {
  float: right;
  color: black;
  border: 1px solid #333;
  font-size: 14px;
  padding: 5px 16px;
  margin-right: 10px;
  /*width: 100px;*/
}

button:focus {
  outline: none;
}

button:active {
  transform: translateX(2px)
}


.button {
  user-select: none;
  background-color: white;
  border: 1px solid #333;
  color: #333;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
}

button.table-btn {
  font-size: 14px;
  padding: 5px 16px;
}

table th {
  font-size: 14px;
  color: white;
  background-color: gray;
}


/* Inlineform EDITOR */

th.inlineForm {
  padding: 0;
}

td,
input {
  font-size: 14px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

input[type="text"] {
  padding-left: 8px;
  margin: 0;
  border: none;
  height: 36px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}


/* Removes the clear button from date inputs */

input[type="date"]::-webkit-clear-button {
  display: none;
}


/* Removes the spin button */

input[type="date"]::-webkit-inner-spin-button {
  display: none;
}


/* Always display the drop down caret */

input[type="date"]::-webkit-calendar-picker-indicator {
  color: lightgray;
  transform: translateX(-8px);
  display: inline-block;
  height: 16px;
  width: 20%;
}

input[type="date"]::-webkit-calendar-picker-indicator:focus {
  color: #2c3e50;

  display: inline-block;
  height: 36px;
  width: 100%;
  color: transparent
}

input[type="date"] {
  appearance: none;
  -webkit-appearance: none;
  border: 1px solid #ecf0f1;
  padding-left: 8px;
  height: 36px;
  width: 100%;
  display: inline-block !important;
  visibility: visible !important;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

input[type="date"]:focus {
  box-shadow: none;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
}

input[type=date]::-webkit-calendar-picker-indicator:hover {
  background: none;
  color: transparent
}

input[type=date]:focus {
  border-color: #3399ff;
}

input[type="date"]:hover {
  border-color: #3399ff;
  cursor: pointer;
}
</style>

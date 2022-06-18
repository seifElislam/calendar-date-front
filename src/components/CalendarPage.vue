<template>
     <div class="container">
        <div class="container__content">

            <table class="container_dates_table">
                <tr class="container__weekday">
                    <td colspan="2">
                        <h1 id="weekday">Monday</h1>
                    </td>
                </tr>
                <tr class="container__main_calendars colored">
                    <td class="calendar1">
                        <h1 id="c1_day" class="day">12</h1>
                        <div class="frame"><p id="c1_month" class=" highlight">xxx</p></div>
                        <h2 id="c1_year">2022</h2>
                    </td>
                    <td class="calendar2">
                        <h1 id="c2_day" class="day">10</h1>
                        <div class="frame"> <p id="c2_month" class=" highlight">yyy</p></div>
                        <h2 id="c2_year">1443</h2>
                    </td>
                </tr>
                <tr class="container__secondary_calendar">
                    <td class="calendar3" colspan="2">
                        <h2>
                            <label id="c3_year">1550</label>&nbsp;
                            <label id="c3_month" class="font" dir="rtl">zzz</label>&nbsp;
                            <label id="c3_day">10</label>
                        </h2>
                    </td>
                </tr>
                <tr class="container__quote colored">
                    <td colspan="2"><h2>quote</h2></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CalendarPage'
}
</script>

<style scoped>
.container {
    direction: rtl;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;

    background-color: lightgray;
}

.container__content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--default-padding);
    color: var(--color-white);
    z-index: 1;
    width: 30%;
    height: 50%;
}

.container__text {

    font-size: var(--font-size-large);
    font-weight: var(--font-weight-bold);
    margin: calc(var(--default-padding) * 3) 0 var(--default-padding);
}

.container__page {
    background-color: whitesmoke;
    box-shadow: 8px 10px 10px 1px rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}

td {
    vertical-align: middle;
}

.container_dates_table {
    table-layout: fixed;
    width: 100%;
    text-align: center;
    vertical-align: middle;
    background-color: white;
    box-shadow: 8px 10px 10px 1px rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    border-style: hidden;
    border-radius: 5px;
    color: darkblue;
}

.container__weekday {
    height: 90px;
    border-bottom: 2px solid lightslategray;
}

h1 {
    font-size: xxx-large;
}

h2 {
    font-size: xx-large;
}

.container__main_calendars {
    height: 250px;
    border-bottom: 2px solid lightslategray;
}

.calendar2, .calendar1 {
    border-right: 2px solid lightslategray;
}

.container__secondary_calendar {
    height: 100px;
    border-bottom: 2px solid lightslategray;
}
.container__quote {
    height: 100px;
}

.colored {
    background-color: aliceblue;
  }

.highlight {
    font-family: 'Amiri', serif;
    font-size: xx-large;
    font-weight: bold;
    margin: 0%;
    margin-top: 5%;
    vertical-align: middle;
  }

  .frame {
    vertical-align: middle;
    border-style: solid;
    border-width: thin;
    border-radius: 5px;
    text-align:center;
    width: 90%;
    height: 20%;
    margin: 20px auto;
    border-color: lightslategray;
    background-color: white;
  }

</style>

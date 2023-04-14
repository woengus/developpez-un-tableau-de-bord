class Activity {
  /**
   *
   * @param {object} data
   * @param {string} data.day
   * @param {number} data.kilogram
   * @param {number} data.calories
   */
  constructor(data) {
    this.day = data.day;
    this.kilogram = data.kilogram;
    this.calories = data.calories;
  }
}

class Performance {
  /**
   *
   * @param {object} data
   * @param {number} value
   * @param {number} kind
   */

  constructor(data) {
    this.value = data.value;
    this.kind = data.kind;
  }
}
class User {
  constructor(data) {
    this.firstname = data.firstname;
  }
}
export { Activity, Performance };

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
   */

  constructor(data) {
    /**
     * @property {number} value
     */
    this.value = data.value;
    /**
     * @property {number} kind
     */
    this.kind = data.kind;
  }
}

export { Activity };

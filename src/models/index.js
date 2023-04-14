//@ts-check
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
   * @param {number} data.value
   * @param {number} data.kind
   */

  constructor(data) {
    this.value = data.value;
    this.kind = data.kind;
  }
}
class Session {
  /**
   *
   * @param {object} data
   * @param {number} data.day
   * @param {number} data.sessionLength
   */
  constructor(data) {
    this.day = data.day;
    this.sessionLength = data.sessionLength;
  }
}
class User {
  /**
   *
   * @param {object} data
   * @param {object} data.userInfos
   * @param {number} data.todayScore
   * @param {object} data.keyData
   */
  constructor(data) {
    this.userInfos = data.userInfos;
    this.todayScore = data.todayScore;
    this.keyData = data.keyData;
  }
}
export { Activity, Performance, Session, User };

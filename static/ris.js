// RIS Index Calculator
// Generated parameters from curve fitting
const men_const = [338.0, 549.0, 0.11354, 74.777, 0.53096];
const women_const = [164.0, 270.0, 0.13776, 57.855, 0.37089];

/**
 * Calculate the RIS (Relative Intensity Scale) index
 * @param {x} - The input value (typically age)
 * @param {A} - Lower asymptote
 * @param {K} - Upper asymptote
 * @param {B} - Growth rate
 * @param {v} - Midpoint/shift
 * @param {Q} - Related to initial value
 * @returns {number} The RIS index value (0-100)
 */
function risIndex(x, A, K, B, v, Q) {
    return 100 / (A + (K - A) / (1 + Q * Math.exp(-B * (x - v))));
}

/**
 * Calculate the RIS index for men
 * @param {x} - The input value (typically age)
 * @returns {number} The RIS index value for men (0-100)
 */
function menRisIndex(x) {
    return risIndex(x, men_const[0], men_const[1], men_const[2], men_const[3], men_const[4]);
}

/**
 * Calculate the RIS index for women
 * @param {x} - The input value (typically age)
 * @returns {number} The RIS index value for women (0-100)
 */
function womenRisIndex(x) {
    return risIndex(x, women_const[0], men_const[1], women_const[2], women_const[3], women_const[4]);
}

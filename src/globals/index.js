export const colors = {
  primary: "#FFE277",
  teal: "#58B4AE",
  orange: "#FFB367",
};

export function validateToken() {
  if (window.localStorage.getItem("token")) {
    return window.localStorage.getItem("token")
  }
  return null
}

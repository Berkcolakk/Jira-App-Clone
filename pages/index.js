import Router from 'next/router'

const Home = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("authUser") != null) {
      Router.push("/Main");
    } else {
      Router.push("/Login");
    }
  }
}
export default Home;

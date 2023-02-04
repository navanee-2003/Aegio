import axios from 'axios';

export const FetchData = (url, setData, setDisplay, setErr, setInvalid) => {

    const key = "zz6iCyWYP1yOk5gxhs6JD5842jW4VCpM";
    const endPoint =
    "https://cors-anywhere.herokuapp.com/https://ipqualityscore.com/api/json/url?key=" +
    key +
    "&url=" +
    url;
    console.log(endPoint);
      axios
      .get(endPoint, {
          method: "GET",
          headers: {
              "IPQS-KEY": "zz6iCyWYP1yOk5gxhs6JD5842jW4VCpM"
            }
        })
        // .then((response) => setData(response.data))
        // .then(() => {setDisplay(false)})
        // .catch((err) => setErr(true));
        .then((response) => {response.data.success ? setInvalid(false) : setInvalid(true)
          setData(response.data) })
        .then(() => {setDisplay(false)})
        .catch((err) => {setErr(true)});

}
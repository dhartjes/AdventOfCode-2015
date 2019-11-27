import parser from "./directionsParser";
import fetch from "node-fetch";

(async () => {
  var response = await fetch("https://adventofcode.com/2015/day/1/input", {
    credentials: "include",
    headers: {
      Cookie:
        "_ga=GA1.2.501735327.1574874791; _gid=GA1.2.1002757208.1574874791; _gat=1; session=53616c7465645f5fb369e92734ea761d26c5efafe26cb1a4a9cac2e1df3331d704b3a40ce9d6e4d14c0c2b0af5384edb"
    }
  }); /*?+*/

  var myJson = await response.text(); /*?+*/

  parser(myJson); /*?+*/
})();

const express = require("express");
const cors = require("cors");
const path  = require('path')

const _dirname = path.dirname("")
const buildPath = path.join(_dirname  , "../client/dist");


const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.static(buildPath))

app.get("/*", function(req, res){

    res.sendFile(
        path.join(__dirname, "../client/dist/index.html"),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );

})
app.listen(PORT, () => {
  console.log("SUCCESSFUL")
})
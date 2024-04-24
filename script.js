var physButton = document.getElementById("phys-btn");
var chemButton = document.getElementById("chem-btn");
var bioButton = document.getElementById("bio-btn");
var homeButton = document.getElementById("home-btn");
var earth = document.getElementById("replace");
var title = document.getElementById("title");
// Physics Globals
let v = 0;
let d = 0;
let t = 0;

// Chem Globals
let M = 0;
let m = 0;
let n = 0;

// Bio Globals
let squareSideLength = 0;
let rectangleLength = 0;
let rectangleWidth = 0;
let rectangleHeight = 0;

// Home
homeButton.addEventListener("click", toHome);

function toHome() {
  title.innerHTML = `The Science 10 Calculator!`;
  earth.innerHTML = `
   <div id="replace">
   <img src="images/earth.png" alt="earth" width="450px" id="earth" />
    </div>
  `;
  document.body.style.backgroundColor = `rgba(128, 128, 128, 0.7)`;
  document.body.style.transition = `background-color 1s`;
}

// Physics
physButton.addEventListener("click", physicsFormulas);

function physicsFormulas() {
  title.innerHTML = `Physics`;
  earth.innerHTML = `
  <h2 class="center">Velocity</h2>

  <p class="center">
    <button id="velocity-formula">
      <img
        src="images/physics/velocity.jpg"
        alt="Velocity Formula"
      />
    </button>
    <button id="distance-formula">
      <img src="images/physics/distance.jpg" alt="Distance Formula" />
    </button>
    <button id="time-formula">
      <img src="images/physics/time.jpg" alt="Time Formula" />
    </button>
  </p>

  <p>v = velocity (m/s)</p>
  <p>m = distance (m)</p>
  <p>t = time (s)</p>

  <hr />
  <div id="phys-formulas"></div>
  `;
  document.body.style.backgroundColor = `rgba(112, 128, 144, 0.8)`;
  document.body.style.transition = `background-color 1s`;

  // Velocity Formula
  document
    .getElementById("velocity-formula")
    .addEventListener("click", velocityFormula);

  function velocityFormula() {
    document.getElementById("phys-formulas").innerHTML = `
      <div class="center">
        <p>d = <input id="distance" class="chem-inp" type="number" /> m</p>
        <p>t = <input id="time" class="chem-inp" type="number" /> s</p>
        <p>
          <button class="calculate" id="calculate-velocity">Calculate</button>
        </p>
        <p>
          v =
          <span
            ><input
              id="velocity-result"
              class="chem-result"
              type="number"
              readonly
          /></span>
        m/s</p>
  
        <hr />
      </div>
      `;
    // assume user has already types in 'd'
    document.getElementById("distance").value = d;
    // assume user has already types in 't'
    document.getElementById("time").value = t;
    //

    document
      .getElementById("calculate-velocity")
      .addEventListener("click", calcVelocity);

    function calcVelocity() {
      //
      d = +document.getElementById("distance").value;
      t = +document.getElementById("time").value;
      //
      v = d / t;
      //
      document.getElementById("velocity-result").value = `${v.toFixed(2)}`;
    }
  }
  // Distance Formula
  document
    .getElementById("distance-formula")
    .addEventListener("click", distanceFormula);

  function distanceFormula() {
    document.getElementById("phys-formulas").innerHTML = `
    <div class="center">
      <p>v = <input id="velocity" class="chem-inp" type="number" /> m/s</p>
      <p>t = <input id="time" class="chem-inp" type="number" /> s</p>
      <p>
        <button class="calculate" id="calculate-distance">Calculate</button>
      </p>
      <p>
        d =
        <span
          ><input
            id="distance-result"
            class="chem-result"
            type="number"
            readonly
        /></span>
      m</p>

      <hr />
    </div>
    `;
    // assume user has already types in 'v'
    document.getElementById("velocity").value = v;
    // assume user has already types in 't'
    document.getElementById("time").value = t;
    //

    document
      .getElementById("calculate-distance")
      .addEventListener("click", calcDistance);

    function calcDistance() {
      //
      v = +document.getElementById("velocity").value;
      t = +document.getElementById("time").value;
      //
      d = v * t;
      //
      document.getElementById("distance-result").value = `${d.toFixed(2)}`;
    }
  }
  // Time Formula
  document
    .getElementById("time-formula")
    .addEventListener("click", timeFormula);

  function timeFormula() {
    document.getElementById("phys-formulas").innerHTML = `
  <div class="center">
    <p>d = <input id="distance" class="chem-inp" type="number" /> m</p>
    <p>v = <input id="velocity" class="chem-inp" type="number" /> m/s</p>
    <p>
      <button class="calculate" id="calculate-time">Calculate</button>
    </p>
    <p>
      v =
      <span
        ><input
          id="time-result"
          class="chem-result"
          type="number"
          readonly
      /></span>
    s</p>

    <hr />
  </div>
  `;
    // assume user has already types in 'd'
    document.getElementById("distance").value = d;
    // assume user has already types in 'v'
    document.getElementById("velocity").value = v;
    //

    document
      .getElementById("calculate-time")
      .addEventListener("click", calcTime);

    function calcTime() {
      //
      d = +document.getElementById("distance").value;
      v = +document.getElementById("velocity").value;
      //
      t = d / v;
      //
      document.getElementById("time-result").value = `${t.toFixed(2)}`;
    }
  }
}

// Chemistry
chemButton.addEventListener("click", chemFormulas);

function chemFormulas() {
  title.innerHTML = `Chemistry`;
  earth.innerHTML = `
  <h2 class="center">Molar Mass</h2>

  <p class="center">
    <button id="molar-mass-formula">
      <img
        src="images/chemistry/molar-mass-equals.jpg"
        alt="Molar Mass Formula"
      />
    </button>
    <button id="mass-formula">
      <img src="images/chemistry/mass-equals.jpg" alt="Mass Formula" />
    </button>
    <button id="moles-formula">
      <img src="images/chemistry/moles-equals.jpg" alt="Moles Formula" />
    </button>
  </p>

  <p>M = molar mass (g/mol)</p>
  <p>m = mass (g)</p>
  <p>n = amounts or moles (mol)</p>

  <hr />
  <div id="chem-formulas"></div>
`;
  document.body.style.backgroundColor = `rgba(144, 112, 112, 0.8)`;
  document.body.style.transition = `background-color 1s`;

  // Molar Mass Formula
  //
  document
    .getElementById("molar-mass-formula")
    .addEventListener("click", molarMassFormula);
  //
  function molarMassFormula() {
    document.getElementById("chem-formulas").innerHTML = `
    <div class="center">
      <p>m = <input id="mass" class="chem-inp" type="number" /></p>
      <p>n = <input id="moles" class="chem-inp" type="number" /></p>
      <p>
        <button class="calculate" id="calculate-molar-mass">Calculate</button>
      </p>
      <p>
        M =
        <span
          ><input
            id="molar-mass-result"
            class="chem-result"
            type="number"
            readonly
        /></span>
      g/mol</p>

      <hr />
    </div>
    `;
    // assume user has already types in 'm'
    document.getElementById("mass").value = m;
    // assume user has already types in 'n'
    document.getElementById("moles").value = n;
    //

    document
      .getElementById("calculate-molar-mass")
      .addEventListener("click", calculateMolarMass);

    function calculateMolarMass() {
      //
      m = +document.getElementById("mass").value;
      n = +document.getElementById("moles").value;
      //
      M = m / n;
      //
      document.getElementById("molar-mass-result").value = `${M.toFixed(2)}`;
    }
  }
  //

  // Moles Formula
  //
  document
    .getElementById("moles-formula")
    .addEventListener("click", molesFormula);
  //
  function molesFormula() {
    document.getElementById("chem-formulas").innerHTML = `
    <div class="center">
      <p>m = <input id="mass" class="chem-inp" type="number" /></p>
      <p>M = <input id="molar-mass" class="chem-inp" type="number" /></p>
      <p><button class="calculate" id="calculate-moles">Calculate</button></p>
      <p>
        n =
        <span
          ><input id="moles-result" class="chem-result" type="number" readonly
        /></span>
        mol</p>

        <hr />
    </div>
    `;
    // assume user has already types in 'n'
    document.getElementById("mass").value = m;
    // assume user has already types in 'M'
    document.getElementById("molar-mass").value = M;
    //

    document
      .getElementById("calculate-moles")
      .addEventListener("click", calculateMoles);

    function calculateMoles() {
      //
      m = +document.getElementById("mass").value;
      M = +document.getElementById("molar-mass").value;
      //
      n = m / M;
      //
      document.getElementById("moles-result").value = `${n.toFixed(2)}`;
    }
  }
  //

  // Mass Formula
  //
  document
    .getElementById("mass-formula")
    .addEventListener("click", massFormula);
  //
  function massFormula() {
    document.getElementById("chem-formulas").innerHTML = `
    <div class="center">
      <p>n = <input id="moles" class="chem-inp" type="number" /></p>
      <p>M = <input id="molar-mass" class="chem-inp" type="number" /></p>
      <p><button class="calculate" id="calculate-mass">Calculate</button></p>
      <p>
        m =
        <span
          ><input id="mass-result" class="chem-result" type="number" readonly
        /></span>
      g</p>

      <hr />
    </div>
    `;
    // assume user has already types in 'n'
    document.getElementById("moles").value = n;
    // assume user has already types in 'M'
    document.getElementById("molar-mass").value = M;
    //

    document
      .getElementById("calculate-mass")
      .addEventListener("click", calculateMass);

    function calculateMass() {
      //
      n = +document.getElementById("moles").value;
      M = +document.getElementById("molar-mass").value;
      //
      m = n * M;
      //
      document.getElementById("mass-result").value = `${m.toFixed(2)}`;
    }
  }
}

// Biology
bioButton.addEventListener("click", bioFormulas);

function bioFormulas() {
  title.innerHTML = `Biology`;
  earth.innerHTML = `
  <h2 class="center">Shapes</h2>

  <p class="center">
    <button id="sa-square-formula">
      <img
        src="images/biology/sa-square.jpg"
        alt="Surface Area of Square Formula"
      />
    </button>
    <button id="v-square-formula">
      <img src="images/biology/v-square.jpg" alt="Volume of Square Formula" />
    </button>
    <button id="sa-rectangle-formula">
      <img
        src="images/biology/sa-rectangle.jpg"
        alt="Surface Area of Rectangle Formula"
      />
    </button>
    <button id="v-rectangle-formula">
      <img
        src="images/biology/v-rectangle.jpg"
        alt="Volume of Rectangle Formula"
      />
    </button>
  </p>

  <p>SA = surface area</p>
  <p>V = volume</p>
  <p></p>

  <hr />
  <div id="bio-formulas"></div>
  `;
  document.body.style.backgroundColor = `rgba(112, 144, 112, 0.8)`;
  document.body.style.transition = `background-color 1s`;

  // Surface Area of Cube Formula
  document
    .getElementById("sa-square-formula")
    .addEventListener("click", saSquare);

  function saSquare() {
    document.getElementById("bio-formulas").innerHTML = `
    <div class="center">
      <p>
        Side length =
        <input id="side-length" class="chem-inp" type="number" /> units
      </p>
      <p>
        <button class="calculate" id="calc-square-sa">Calculate</button>
      </p>
      <p>
        SA =
        <span
          ><input
            id="sq-sa-result"
            class="chem-result"
            type="number"
            readonly
        /></span>
        units
      </p>

      <hr />
    </div>
  `;
    // assume user has already types in 'squareSideLength'
    document.getElementById("side-length").value = squareSideLength;
    //
    document
      .getElementById("calc-square-sa")
      .addEventListener("click", calcSquareSurfaceArea);

    function calcSquareSurfaceArea() {
      squareSideLength = +document.getElementById("side-length").value;
      surfaceArea = 6 * squareSideLength ** 2;

      document.getElementById("sq-sa-result").value = `${surfaceArea.toFixed(
        2
      )}`;
    }
  }

  // Volume of Cube Formula
  document
    .getElementById("v-square-formula")
    .addEventListener("click", vSquare);

  function vSquare() {
    document.getElementById("bio-formulas").innerHTML = `
    <div class="center">
      <p>
        Side length =
        <input id="side-length" class="chem-inp" type="number" /> units
      </p>
      <p>
        <button class="calculate" id="calc-square-v">Calculate</button>
      </p>
      <p>
        V =
        <span
          ><input
            id="sq-v-result"
            class="chem-result"
            type="number"
            readonly
        /></span>
        units
      </p>

      <hr />
    </div>
    `;
    // assume user has already types in 'squareSideLength'
    document.getElementById("side-length").value = squareSideLength;
    //
    document
      .getElementById("calc-square-v")
      .addEventListener("click", calcSquareVolume);

    function calcSquareVolume() {
      squareSideLength = +document.getElementById("side-length").value;
      volume = squareSideLength ** 3;

      document.getElementById("sq-v-result").value = `${volume.toFixed(2)}`;
    }
  }

  // Surface Area of Rectangular Prism
  document
    .getElementById("sa-rectangle-formula")
    .addEventListener("click", saRectangle);

  function saRectangle() {
    document.getElementById("bio-formulas").innerHTML = `
  <div class="center">
    <p>
      Length =
      <input id="length" class="chem-inp" type="number" /> units
    </p>
    <p>
      Width =
     <input id="width" class="chem-inp" type="number" /> units
   </p>
   <p>
      Height =
     <input id="height" class="chem-inp" type="number" /> units
</p>
    <p>
      <button class="calculate" id="calc-square-sa">Calculate</button>
    </p>
    <p>
      SA =
      <span
        ><input
          id="r-sa-result"
          class="chem-result"
          type="number"
          readonly
      /></span>
      units
    </p>

    <hr />
  </div>
`;
    // assume user has already types in 'rectangleLength'
    document.getElementById("length").value = rectangleLength;
    //
    // assume user has already types in 'rectangleWidth'
    document.getElementById("width").value = rectangleWidth;
    //
    // assume user has already types in 'rectangleHeight'
    document.getElementById("height").value = rectangleHeight;
    //
    document
      .getElementById("calc-square-sa")
      .addEventListener("click", calcRectangleSurfaceArea);

    function calcRectangleSurfaceArea() {
      rectangleLength = +document.getElementById("length").value;
      rectangleWidth = +document.getElementById("width").value;
      rectangleHeight = +document.getElementById("height").value;
      surfaceArea =
        2 * rectangleLength * rectangleWidth +
        2 * rectangleWidth * rectangleHeight +
        2 * rectangleHeight * rectangleLength;

      document.getElementById("r-sa-result").value = `${surfaceArea.toFixed(
        2
      )}`;
    }
  }
  // Volume of Rectangle Formula
  document
    .getElementById("v-rectangle-formula")
    .addEventListener("click", vRectangle);

  function vRectangle() {
    document.getElementById("bio-formulas").innerHTML = `
  <div class="center">
    <p>
      Length =
      <input id="length" class="chem-inp" type="number" /> units
    </p>
    <p>
      Width =
     <input id="width" class="chem-inp" type="number" /> units
   </p>
   <p>
      Height =
     <input id="height" class="chem-inp" type="number" /> units
</p>
    <p>
      <button class="calculate" id="calc-square-sa">Calculate</button>
    </p>
    <p>
      V =
      <span
        ><input
          id="r-v-result"
          class="chem-result"
          type="number"
          readonly
      /></span>
      units
    </p>

    <hr />
  </div>
`;
    // assume user has already types in 'rectangleLength'
    document.getElementById("length").value = rectangleLength;
    //
    // assume user has already types in 'rectangleWidth'
    document.getElementById("width").value = rectangleWidth;
    //
    // assume user has already types in 'rectangleHeight'
    document.getElementById("height").value = rectangleHeight;
    //
    document
      .getElementById("calc-square-sa")
      .addEventListener("click", calcRectangleVolume);

    function calcRectangleVolume() {
      rectangleLength = +document.getElementById("length").value;
      rectangleWidth = +document.getElementById("width").value;
      rectangleHeight = +document.getElementById("height").value;
      volume = rectangleLength * rectangleWidth * rectangleHeight;

      document.getElementById("r-v-result").value = `${volume.toFixed(2)}`;
    }
  }
}

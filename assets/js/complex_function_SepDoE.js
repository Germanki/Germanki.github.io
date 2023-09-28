const curve_time = [0, 1.5, 3, 4.5, 6, 7.5, 9, 10.5, 12, 13.5, 15, 16.5, 18, 19.5, 21, 22.5, 24, 25.5, 27, 28.5, 30, 31.5, 33, 34.5, 36, 37.5, 39, 40.5, 42, 43.5, 45, 46.5, 48, 49.5, 51, 52.5, 54, 55.5, 57, 58.5, 60];

// Placeholder function for Match operation
function match(value, option1, result1, option2, result2) {
    if (value === option1) {
      return result1;
    } else if (value === option2) {
      return result2;
    } else {
      return 0;
    }
  }
  
  // Translated JavaScript version of complex_function
  function complexFunction(time, BSA, DNA, pH, RecBCD, DTT, SodiumChloride) {
    // Interpolation values for the mean curve
    let mean_curve_values = [188461.787111872, 188101.280635207, 187898.090693239, 187507.29513693, 182805.136437447, 176790.382544103, 172541.340504605, 171088.202380993, 169663.200635702, 168546.434240914, 167360.970757051, 166494.764597964, 165667.675827408, 164693.670771462, 163464.886216984, 163033.967325058, 162590.532402508, 162155.488001854, 161679.200714058, 161280.898048708, 160887.637805142, 160475.858576293, 160045.012887529, 159708.622580831, 159358.575052472, 159040.272733871, 158755.193885677, 158343.44231831, 157964.913367316, 157465.615352776, 156840.745155116, 156684.501388621, 156517.944402656, 156372.737256338, 156257.4262018, 156023.863015418, 155818.244999805, 155512.942279544, 155071.940713649, 155124.639676475, 155111.07736602];
    let shape_component_1 = [-0.0398154395090086, -0.0389359040768617, -0.0370464128823879,-0.0392981611759812, -0.0975659069391075, -0.123589853646152, -0.139857974792527,-0.145288443041414, -0.150165750035481, -0.153607723339465, -0.157630961197618,-0.159297175969168, -0.160865742617084, -0.162762242253721, -0.16509150000145,-0.165764756125526, -0.166467496258877, -0.167129568363347, -0.167906786192936,-0.168508349690013, -0.169082667266838, -0.169766137165866, -0.170667654903562,-0.170789829575695, -0.17093636174941, -0.171053142003701, -0.171159793716163,-0.17130163243043, -0.171415306722653, -0.171647476630543, -0.172023935466736,-0.171852122025072, -0.171661284735242, -0.171540525046331, -0.171504957166398,-0.171127738377354, -0.170797722992264, -0.17028367701447, -0.169575069248556,-0.169589459303292, -0.169541328612683];
    let shape_component_2 = [0.488928125747685, 0.481161720060074, 0.473840297785826, 0.46690657316035,0.216927187655062, 0.107009623206958, 0.0506821127212845, 0.0355717355436436,0.0213773184497086, 0.0149773434085837, 0.00780595771268658, 0.00446653929046296,0.00136186140722776, -0.00232300069748647, -0.00482438570415633,-0.007395671519578, -0.00980997820571582, -0.0123243961301311,-0.0150767124095152, -0.0173355076140456, -0.0196869508364378,-0.0216517439888475, -0.0238393866994218, -0.0256467569464529, -0.02728331639562,-0.0289965311448188, -0.0308151816307234, -0.0321918249246485,-0.0334457148535459, -0.035110082314706, -0.0373871949418286,-0.0373059819044178, -0.0372531301330005, -0.0372273051293068,-0.0372724871179812, -0.0370672970480939, -0.036856128203186,-0.0367369843368869, -0.0366869171751533, -0.0363951514556549,-0.0350807549226231];
    let shape_component_3 = [-0.0728307692551135, -0.0926519733441035, -0.109186942611895,-0.111569227637897, 0.188014391789763, 0.263805374935699, 0.287107944132568,0.273297413488083, 0.259449815862937, 0.239336967385676, 0.221097899975002,0.198795088763967, 0.17736518016785, 0.153163787544123, 0.126872680520571,0.110336797131442, 0.0934215611376513, 0.0765248685589456, 0.0591539339459272,0.0439754421257009, 0.0287072017604996, 0.013786444113546, -0.00143957324947723,-0.0157506176620018, -0.02991574978325, -0.0441230898569899, -0.0573392226211832,-0.0742538148821304, -0.0900298954562235, -0.109568968735539, -0.133139893965825,-0.141411368754141, -0.149776366653158, -0.158746217925054, -0.167647495357594,-0.177136032479837, -0.186352684898982, -0.196564733718869, -0.210216899263663,-0.210045294060631, -0.209614772622303];
    let shape_component_4 = [-0.138319245160931, -0.0905559611501874, -0.0349733676462371,-0.0309962266440421, 0.422636386142065, 0.357376514402543, 0.234311798580756,0.165440401601821, 0.0986515172678006, 0.0456287052076074, -0.0118303274906323,-0.0389302789716621, -0.0627636892846431, -0.0981580438041145,-0.143945970450999, -0.144517728428549, -0.146802339128703, -0.146393930322512,-0.148238967028622, -0.148125489426147, -0.145978768066819, -0.151541765253615,-0.165237597898159, -0.149254228895044, -0.13243209742082, -0.119360400282463,-0.108575929937661, -0.0892486321177515, -0.0696466131993562,-0.0510919041637588, -0.0371972282610779, -0.00555353872726287,0.0251598690712737, 0.0584824577372305, 0.0923452915334482, 0.127320426894023,0.162191513448504, 0.197893611715273, 0.244138898140744, 0.242827843727397,0.243362836882492];

    // Use Everpolate's linear function for interpolation
    let mean_curve_interp = everpolate.linear(time, curve_time, mean_curve_values);
    let shape1_interp = everpolate.linear(time, curve_time, shape_component_1);
    let shape2_interp = everpolate.linear(time, curve_time, shape_component_2);
    let shape3_interp = everpolate.linear(time, curve_time, shape_component_3);
    let shape4_interp = everpolate.linear(time, curve_time, shape_component_4);
  
    // Parameters that define the first shape component
    let param1 = (1600.63645022988 + -151200.838351904 * BSA + BSA * DNA * 16630.3385331214 + 
          BSA * match(pH, "6", 99124.6245338916, "8", 0) + BSA * RecBCD * -2707.67908139482 + 
          35693.6577617717 * DTT + DTT * match(pH, "6", -25961.5785527015, "8", 0) +
          DNA * DNA * -4173.124426661 + DNA * match(pH, "6", -9402.41622895508, "8", 0) + 
          DNA * SodiumChloride * -392.663015606317 + DNA * RecBCD * 9711.3302767037 +
          match(pH, "6", SodiumChloride * -1644.97155854136, "8", SodiumChloride * 0) + 
          match(pH, "6", RecBCD * -189884.065204169, "8", RecBCD * 0) +
          2806.62184544295 * SodiumChloride + RecBCD)

    let param2 = (64451.911892955 + -11478.129987588 * BSA + BSA * BSA * 2612.68983981746 + 
        BSA * DNA * 1103.15069131127 + BSA * match(pH, "6", -8125.84329071797, "8", 0) + 
        BSA * RecBCD * -4951.01955708987 + DTT * DTT * -3265.87283933868 + 
        -13661.615695652 * DNA + DNA * match(pH, "6", 3374.86307522542, "8", 0) + 
        DNA * SodiumChloride * -101.502758072664 + DNA * RecBCD * 1700.34073914728 +
        match(pH, "6", -37856.7578316104, "8", 0) +
        match(pH, "6", RecBCD * -9747.57873293706, "8", RecBCD * 0) + 
        SodiumChloride * SodiumChloride * 9.06677155611429 + 21245.2969712921 * RecBCD)

    let param3 = (88298.1315315892 + -24550.6006055568 * BSA + BSA * BSA * 2435.72567200379 + 
        BSA * DTT * 1668.79969524563 + BSA * DNA * 1580.94624055756 + 
        BSA * SodiumChloride * -39.1891018543416 + BSA * RecBCD * 1015.97531351143 + 
        DTT * SodiumChloride * -132.787241491569 + -15610.4732495251 * DNA + 
        DNA * RecBCD * 8897.7017695306 + match(pH, "6", -8696.34690217596, "8", 0) + 
        match(pH, "6", RecBCD * 28539.1386791542, "8", RecBCD * 0) + 
        SodiumChloride * SodiumChloride * 4.94075453740131 + 
        SodiumChloride * RecBCD * 195.924064819956 + -60646.2537120098 * RecBCD)

    let param4 = (-8496.76668669333 + 2392.20103116572 * BSA + BSA * DNA * -261.96109137334 + 
        BSA * RecBCD * -1385.94590172208 + DTT * DNA * -894.550655700557 + 
        DTT * SodiumChloride * 68.2685422123261 + DTT * RecBCD * 2480.24949890421 + 
        DNA * DNA * 345.282329611751 + match(pH, "6", -1750.09767572855, "8", 0) + 
        match(pH, "6", 7059.93133600625, "8", 0) + 
        match(pH, "6", SodiumChloride * -112.220155551185, "8", SodiumChloride * 0) + 
        match(pH, "6", RecBCD * 6797.00446978202, "8", RecBCD * 0) + 
        SodiumChloride * RecBCD * 46.0036887033848)

    return mean_curve_interp + shape1_interp * param1 + shape2_interp * param2 + shape3_interp * param3 + shape4_interp * param4;

    }

// Initialize Plotly graph
function initPlot() {
    // Test data and layout
    let data = [{
      x: [0, 1, 2, 3],
      y: [0, 1, 2, 3],
      mode: 'markers',
      type: 'scatter'
    }];
  
    let layout = {
      title: 'Interactive Graph',
      xaxis: {
        title: 'Time (mins)'
      },
      yaxis: {
        title: 'Fluorescence'
      }
    };
  
    // Create the Plotly graph
    Plotly.newPlot('plotlyGraph', data, layout);
  }
  
  // Call initPlot function to draw the initial Plotly graph
  initPlot();

function updateGraph() {
    console.log("updateGraph function is triggered");  // This will print a message in the console when the function is called
    // Get the current values from the sliders
    let BSA = parseFloat(document.getElementById('BSA_slider').value);
    let DNA = parseFloat(document.getElementById('DNA_slider').value);
    let pH = parseFloat(document.getElementById('pH_slider').value);
    let RecBCD = parseFloat(document.getElementById('RecBCD_slider').value);
    let DTT = parseFloat(document.getElementById('DTT_slider').value);
    let SodiumChloride = parseFloat(document.getElementById('NaCl_slider').value);
  
    // Update the graph based on the new values
    let new_y_values = complexFunction(curve_time, BSA, DNA, pH, RecBCD, DTT, SodiumChloride);
    console.log("New Y Values: ", new_y_values);  // This will print the new Y values to the console

    // Update the Plotly graph
    Plotly.update('plotlyGraph', { y: [new_y_values] }, {});
  }
  
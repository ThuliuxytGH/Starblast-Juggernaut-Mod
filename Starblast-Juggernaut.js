// Starblast Juggernaut v0.6

/*  TODO
Make UI components working
  - Switch in the spawn
  - ability for the juggernaut
  
Make 3 check points (A, B, C)
  - with different colors and add markers to see the states of thoses zones for the players
*/

// fly
var Fly_101 = '{"name":"Fly","level":1,"model":1,"size":1.05,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-65,-60,-50,-20,10,30,55,75,60],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,8,10,30,25,30,18,15,0],"height":[0,6,8,12,20,20,18,15,0],"propeller":true,"texture":[4,63,10,1,1,1,12,17]},"cockpit":{"section_segments":12,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,0,20,30,60],"z":[0,0,0,0,0]},"width":[0,13,17,10,5],"height":[0,18,25,18,5],"propeller":false,"texture":[7,9,9,4,4]},"cannon":{"section_segments":6,"offset":{"x":0,"y":-15,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[5,6],"rate":4,"type":1,"speed":[160,180],"number":1,"error":2.5},"propeller":false,"texture":[3,3,10,3]}},"wings":{"main":{"length":[60,20],"width":[100,50,40],"angle":[-10,10],"position":[0,20,10],"doubleside":true,"offset":{"x":0,"y":10,"z":5},"bump":{"position":30,"size":20},"texture":[11,63]}},"typespec":{"name":"Fly","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"shape":[1.368,1.368,1.093,0.965,0.883,0.827,0.791,0.767,0.758,0.777,0.847,0.951,1.092,1.667,1.707,1.776,1.856,1.827,1.744,1.687,1.525,1.415,1.335,1.606,1.603,1.578,1.603,1.606,1.335,1.415,1.525,1.687,1.744,1.827,1.856,1.776,1.707,1.667,1.654,0.951,0.847,0.777,0.758,0.767,0.791,0.827,0.883,0.965,1.093,1.368],"lasers":[{"x":0,"y":-1.365,"z":-0.21,"angle":0,"damage":[5,6],"rate":4,"type":1,"speed":[160,180],"number":1,"spread":0,"error":2.5,"recoil":0}],"radius":1.856}}';
// ships
var A_Speedster_605 = '{"name":"A-Speedster","level":6,"model":5,"size":1.5,"specs":{"shield":{"capacity":[300,300],"reload":[8,8]},"generator":{"capacity":[140,140],"reload":[45,45]},"ship":{"mass":175,"speed":[115,115],"rotation":[80,80],"acceleration":[140,140]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-100,-95,0,0,70,65],"z":[0,0,0,0,0,0]},"width":[0,10,40,20,20,0],"height":[0,5,30,30,15,0],"texture":[6,11,5,63,12],"propeller":true,"laser":{"damage":[38,84],"rate":1,"type":2,"speed":[175,230],"recoil":50,"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":10,"offset":{"x":50,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,12]},"cannons":{"section_segments":12,"offset":{"x":30,"y":40,"z":45},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":-10,"laser":{"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[63],"bump":{"position":0,"size":25}},"winglets":{"offset":{"x":0,"y":-40,"z":10},"doubleside":true,"length":[45,10],"width":[5,20,30],"angle":[50,-10],"position":[90,80,50],"texture":[4],"bump":{"position":10,"size":30}}},"typespec":{"name":"A-Speedster","level":6,"model":5,"code":605,"specs":{"shield":{"capacity":[300,300],"reload":[8,8]},"generator":{"capacity":[140,140],"reload":[45,45]},"ship":{"mass":175,"speed":[115,115],"rotation":[80,80],"acceleration":[140,140]}},"shape":[3,2.914,2.408,1.952,1.675,1.49,1.349,1.263,1.198,1.163,1.146,1.254,1.286,1.689,2.06,2.227,2.362,2.472,2.832,3.082,3.436,3.621,3.481,2.48,2.138,2.104,2.138,2.48,3.481,3.621,3.436,3.082,2.832,2.472,2.362,2.227,2.06,1.689,1.286,1.254,1.146,1.163,1.198,1.263,1.349,1.49,1.675,1.952,2.408,2.914],"lasers":[{"x":0,"y":-3,"z":0,"angle":0,"damage":[38,84],"rate":1,"type":2,"speed":[175,230],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.16,"y":-0.277,"z":1.35,"angle":-10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-1.16,"y":-0.277,"z":1.35,"angle":10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.621}}';
var pulsor_Mk19_606 = '{"name":"pulsor_Mk19","level":6,"model":6,"size":1.5,"specs":{"shield":{"capacity":[450,450],"reload":[8,8]},"generator":{"capacity":[350,350],"reload":[60,60]},"ship":{"mass":300,"speed":[100,100],"rotation":[70,70],"acceleration":[120,120]}},"tori":{"circle":{"segments":20,"radius":38,"section_segments":12,"offset":{"x":0,"y":-120,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10],"height":[4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],"texture":[31]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":10,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-100,-99,-50,0,10,30,50,80,100,90],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,30,30,33,43,50,40,30,0],"height":[0,10,20,20,20,20,20,20,10,0],"texture":[17,2,10,2,63,11,4,63,12],"propeller":true},"side":{"section_segments":10,"offset":{"x":50,"y":60,"z":0},"position":{"x":[-36,-35,-15,15,20,0,-50],"y":[-328,-320,-180,-90,-30,0,45,50],"z":[0,0,0,0,0,0,0,0]},"width":[0,3,15,20,20,20,0,0],"height":[0,6,20,30,30,30,10,0],"texture":[17,0,1,2,3,4,63],"propeller":true,"laser":{"damage":[5,7],"rate":10,"type":2,"speed":[100,150],"recoil":0,"number":5,"error":15}},"cannons":{"section_segments":8,"offset":{"x":0,"y":-223,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[5,0,23,27,62,67,97,102,163],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,5,5,7,7,4,4,7,7],"height":[0,5,5,7,7,4,4,7,7],"texture":[17,3,17,8,17,3,17,8],"propeller":false,"laser":{"damage":[10,20],"rate":1,"type":2,"speed":[100,300],"recoil":50,"number":5,"error":0}},"turret":{"angle":0,"section_segments":8,"offset":{"x":68,"y":20,"z":31},"position":{"x":[0,0,0,0,0],"y":[-8.5,-5,0,5,8.5],"z":[0,0,0,0,0]},"width":[0,6,7,6,0],"height":[0,3,5,3,0],"texture":[2,3,31,31]},"cannon_1":{"section_segments":6,"offset":{"x":70,"y":15,"z":32},"position":{"x":[0,0,0,0,-1],"y":[-5,-8,0,2,5],"z":[0,0,0,0,0]},"width":[0,1,1,1,2],"height":[0,1,1,1,2],"angle":0,"laser":{"damage":[5,7],"rate":10,"type":1,"speed":[160,180],"number":1,"error":5},"propeller":false,"texture":[16,16,8,8]},"cannon_2":{"section_segments":6,"offset":{"x":66,"y":15,"z":32},"position":{"x":[0,0,0,0,1],"y":[-5,-8,0,2,5],"z":[0,0,0,0,0]},"width":[0,1,1,1,2],"height":[0,1,1,1,2],"angle":0,"laser":{"damage":[5,7],"rate":10,"type":1,"speed":[160,180],"number":1,"error":5},"propeller":false,"texture":[16,16,8,8]},"turret1":{"angle":0,"section_segments":8,"offset":{"x":66,"y":-5,"z":31},"position":{"x":[0,0,0,0,0],"y":[-8.5,-5,0,5,8.5],"z":[0,0,0,0,0]},"width":[0,6,7,6,0],"height":[0,3,5,3,0],"texture":[2,3,31,31]},"cannon1_1":{"section_segments":6,"offset":{"x":64,"y":-10,"z":32},"position":{"x":[0,0,0,0,-1],"y":[-5,-8,0,2,5],"z":[0,0,0,0,0]},"width":[0,1,1,1,2],"height":[0,1,1,1,2],"angle":0,"laser":{"damage":[5,7],"rate":10,"type":1,"speed":[160,180],"number":1,"error":5},"propeller":false,"texture":[16,16,8,8]},"cannon1_2":{"section_segments":6,"offset":{"x":68,"y":-10,"z":32},"position":{"x":[0,0,0,0,1],"y":[-5,-8,0,2,5],"z":[0,0,0,0,0]},"width":[0,1,1,1,2],"height":[0,1,1,1,2],"angle":0,"laser":{"damage":[5,7],"rate":10,"type":1,"speed":[160,180],"number":1,"error":5},"propeller":false,"texture":[16,16,8,8]},"turret2":{"angle":0,"section_segments":8,"offset":{"x":63,"y":-30,"z":31},"position":{"x":[0,0,0,0,0],"y":[-8.5,-5,0,5,8.5],"z":[0,0,0,0,0]},"width":[0,6,7,6,0],"height":[0,3,5,3,0],"texture":[2,3,31,31]},"cannon2_1":{"section_segments":6,"offset":{"x":61,"y":-35,"z":32},"position":{"x":[0,0,0,0,-1],"y":[-5,-8,0,2,5],"z":[0,0,0,0,0]},"width":[0,1,1,1,2],"height":[0,1,1,1,2],"angle":0,"laser":{"damage":[5,7],"rate":10,"type":1,"speed":[160,180],"number":1,"error":5},"propeller":false,"texture":[16,16,8,8]},"cannon2_2":{"section_segments":6,"offset":{"x":65,"y":-35,"z":32},"position":{"x":[0,0,0,0,1],"y":[-5,-8,0,2,5],"z":[0,0,0,0,0]},"width":[0,1,1,1,2],"height":[0,1,1,1,2],"angle":0,"laser":{"damage":[5,7],"rate":10,"type":1,"speed":[160,180],"number":1,"error":5},"propeller":false,"texture":[16,16,8,8]},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-40,"z":7},"position":{"x":[0,0,0,0,0,0,0],"y":[-30,-20,0,30,40],"z":[0,0,0,0,0]},"width":[0,10,15,10,0],"height":[0,18,25,18,0],"texture":[9],"propeller":false},"side_propulsors":{"section_segments":10,"offset":{"x":65,"y":-5,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,10,10,20,5,5,20,15,0],"height":[0,15,10,10,10,15,15,20,15,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,12]},"side_propulsors2":{"section_segments":10,"offset":{"x":40,"y":20,"z":5},"position":{"x":[-5,-5,-5,-5,-5,-5,-5,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,15,0],"height":[0,15,20,20,20,15,15,20,15,0],"propeller":true,"texture":[17,12,31,31,3,17,5,4,12]},"borderless":{"section_segments":8,"offset":{"x":25,"y":-180,"z":0},"position":{"x":[-6,5,16,31,55],"y":[-80,-20,30,80,150],"z":[0,0,0,0,0]},"width":[0,4,4,4,3],"height":[0,4,4,4,0],"angle":0,"texture":[17]}},"wings":{"main":{"doubleside":true,"offset":{"x":10,"y":25,"z":0},"length":[90,40],"width":[130,50,30],"angle":[0,0],"position":[0,-30,10],"texture":[11,63],"bump":{"position":10,"size":10}},"top":{"doubleside":true,"offset":{"x":10,"y":50,"z":10},"length":[50],"width":[70,30],"angle":[60],"position":[0,30],"texture":[63],"bump":{"position":10,"size":10}}},"typespec":{"name":"pulsor_Mk19","level":6,"model":6,"code":606,"specs":{"shield":{"capacity":[450,450],"reload":[8,8]},"generator":{"capacity":[350,350],"reload":[60,60]},"ship":{"mass":300,"speed":[100,100],"rotation":[70,70],"acceleration":[120,120]}},"shape":[8.051,7.897,5.788,4.542,3.866,3.413,3.117,2.917,2.773,2.697,3.185,3.4,3.708,4.159,4.336,4.46,2.832,3.004,3.259,3.274,3.115,3.413,3.316,3.421,3.358,3.306,3.358,3.421,3.316,3.413,3.115,3.274,3.259,3.004,2.832,4.46,4.336,4.159,3.72,3.4,3.185,2.697,2.773,2.917,3.117,3.413,3.866,4.542,5.788,7.897],"lasers":[{"x":0.42,"y":-8.04,"z":0,"angle":0,"damage":[5,7],"rate":10,"type":2,"speed":[100,150],"number":5,"spread":0,"error":15,"recoil":0},{"x":-0.42,"y":-8.04,"z":0,"angle":0,"damage":[5,7],"rate":10,"type":2,"speed":[100,150],"number":5,"spread":0,"error":15,"recoil":0},{"x":0,"y":-6.69,"z":0,"angle":0,"damage":[10,20],"rate":1,"type":2,"speed":[100,300],"number":5,"spread":0,"error":0,"recoil":50},{"x":2.1,"y":0.21,"z":0.96,"angle":0,"damage":[5,7],"rate":10,"type":1,"speed":[160,180],"number":1,"spread":0,"error":5,"recoil":0},{"x":-2.1,"y":0.21,"z":0.96,"angle":0,"damage":[5,7],"rate":10,"type":1,"speed":[160,180],"number":1,"spread":0,"error":5,"recoil":0},{"x":1.98,"y":0.21,"z":0.96,"angle":0,"damage":[5,7],"rate":10,"type":1,"speed":[160,180],"number":1,"spread":0,"error":5,"recoil":0},{"x":-1.98,"y":0.21,"z":0.96,"angle":0,"damage":[5,7],"rate":10,"type":1,"speed":[160,180],"number":1,"spread":0,"error":5,"recoil":0},{"x":1.92,"y":-0.54,"z":0.96,"angle":0,"damage":[5,7],"rate":10,"type":1,"speed":[160,180],"number":1,"spread":0,"error":5,"recoil":0},{"x":-1.92,"y":-0.54,"z":0.96,"angle":0,"damage":[5,7],"rate":10,"type":1,"speed":[160,180],"number":1,"spread":0,"error":5,"recoil":0},{"x":2.04,"y":-0.54,"z":0.96,"angle":0,"damage":[5,7],"rate":10,"type":1,"speed":[160,180],"number":1,"spread":0,"error":5,"recoil":0},{"x":-2.04,"y":-0.54,"z":0.96,"angle":0,"damage":[5,7],"rate":10,"type":1,"speed":[160,180],"number":1,"spread":0,"error":5,"recoil":0},{"x":1.83,"y":-1.29,"z":0.96,"angle":0,"damage":[5,7],"rate":10,"type":1,"speed":[160,180],"number":1,"spread":0,"error":5,"recoil":0},{"x":-1.83,"y":-1.29,"z":0.96,"angle":0,"damage":[5,7],"rate":10,"type":1,"speed":[160,180],"number":1,"spread":0,"error":5,"recoil":0},{"x":1.95,"y":-1.29,"z":0.96,"angle":0,"damage":[5,7],"rate":10,"type":1,"speed":[160,180],"number":1,"spread":0,"error":5,"recoil":0},{"x":-1.95,"y":-1.29,"z":0.96,"angle":0,"damage":[5,7],"rate":10,"type":1,"speed":[160,180],"number":1,"spread":0,"error":5,"recoil":0}],"radius":8.051}}';
var Preculsor_607 = '{"name":"Preculsor","level":6,"model":7,"size":1.8,"specs":{"shield":{"capacity":[400,400],"reload":[6,6]},"generator":{"capacity":[550,550],"reload":[80,80]},"ship":{"mass":250,"speed":[130,130],"rotation":[90,90],"acceleration":[130,130]}},"bodies":{"main":{"section_segments":9,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-150,-140,-100,-50,50,120,90],"z":[0,0,0,0,0,-2,-2]},"width":[0,6,17,24,24,20,0],"height":[0,5,14,18,20,14,0],"texture":[4,4,3,18,18,17],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-70,"z":14},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,35,100],"z":[0,0,0,0,0]},"width":[0,7,10,10,0],"height":[0,5,10,12,0],"texture":[9]},"cannons":{"section_segments":8,"offset":{"x":35,"y":-120,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,-20,-20,-20],"y":[35,30,54,57,92,94,120,122,163,185,185],"z":[0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,3,3,4,4,3,3,5,5,5,0],"height":[0,3,3,4,4,3,3,5,5,5,0],"texture":[17,13,17,18,17,13,17,8,31,17],"laser":{"damage":[2,5],"rate":4,"type":1,"speed":[180,200],"number":6,"recoil":20,"error":2},"propeller":false},"propulsors":{"section_segments":8,"offset":{"x":25,"y":55,"z":-5},"position":{"x":[-8,-2,-2,0,0,0,0,0,0,0,0,0,0],"y":[-20,-10,0,30,50,30],"z":[5,5,5,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,9,10,8,0],"height":[0,4,6,10,8,0],"texture":[4,31,18,13,17],"propeller":true},"propulsors2":{"section_segments":8,"offset":{"x":15,"y":65,"z":-20},"position":{"x":[-8,-2,-2,0,0,0,0,0,0,0,0,0,0],"y":[-20,-10,0,30,50,30],"z":[5,5,5,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,9,10,8,0],"height":[0,4,6,10,8,0],"texture":[4,31,18,13,17],"propeller":true},"Propeller":{"section_segments":9,"offset":{"x":60,"y":10,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-53,-46,-23,2,28,55,30],"z":[0,0,0,0,0,0,0]},"width":[0,5,11,8,11,8,0],"height":[0,5,10,8,10,5,0],"texture":[6,2,3,4,31,17],"propeller":true},"topdetail":{"section_segments":8,"offset":{"x":0,"y":0,"z":15},"position":{"x":[0,0,0,0,0,0],"y":[-40,-30,0,10,60,70],"z":[0,0,0,0,0,0]},"width":[10,10,10,10,10,0],"height":[5,5,5,5,5,0],"texture":[4,10,1,10,4]},"topdetail2":{"section_segments":5,"offset":{"x":60,"y":0,"z":8},"position":{"x":[0,0,0,0,0],"y":[-14,-13,11,38,39],"z":[0,0,-2,0,0]},"width":[0,4,3,4,0],"height":[0,2,2,2,0],"texture":[31]},"detaillight":{"section_segments":8,"offset":{"x":5,"y":12,"z":19},"position":{"x":[-3,0,0,0,-3],"y":[-10,-5,0,5,10],"z":[0,0,0,0,0]},"width":[1.2,1,1,1,1.2],"height":[1.2,1,1,1,1.2],"texture":[31]},"detaillight2":{"section_segments":8,"offset":{"x":5,"y":37,"z":19},"position":{"x":[-3,0,0,0,-3],"y":[-10,-5,0,5,10],"z":[0,0,0,0,0]},"width":[1.2,1,1,1,1.2],"height":[1.2,1,1,1,1.2],"texture":[31]},"Dettail":{"section_segments":8,"offset":{"x":0,"y":17,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-5,-4,4,5],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[17,5,17],"vertical":true},"Dettail2":{"section_segments":8,"offset":{"x":0,"y":17,"z":-25},"position":{"x":[0,0,0,0,0,0,0],"y":[-5,-4,4,5],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[17,5,17],"vertical":true},"Dettail3":{"section_segments":8,"offset":{"x":0,"y":17,"z":-50},"position":{"x":[0,0,0,0,0,0,0],"y":[-5,-4,4,5],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[17,5,17],"vertical":true},"Dettail4":{"section_segments":8,"offset":{"x":60,"y":4.5,"z":-12},"position":{"x":[0,0,0,0,0,0,0],"y":[-4,-4,4,4],"z":[0,0,0,0]},"width":[0,3.5,3.5,0],"height":[0,3.5,3.5,0],"texture":[17,5,17],"vertical":true},"Dettail5":{"section_segments":8,"offset":{"x":60,"y":6,"z":13},"position":{"x":[0,0,0,0,0,0,0],"y":[-4,-4,4,4],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,4,4,0],"texture":[17,5,17],"vertical":true},"Dettail6":{"section_segments":8,"offset":{"x":60,"y":6,"z":-38},"position":{"x":[0,0,0,0,0,0,0],"y":[-4,-4,4,4],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,4,4,0],"texture":[17,5,17],"vertical":true},"MCircle":{"section_segments":14,"offset":{"x":65,"y":10,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-1,-1,1,1],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[5,17,5]},"MCircle2":{"section_segments":14,"offset":{"x":65.6,"y":6,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-1,-1,1,1],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[5,17,5]},"MCircle3":{"section_segments":14,"offset":{"x":66.2,"y":2,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-1,-1,1,1],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[5,17,5]},"MCircle4":{"section_segments":14,"offset":{"x":65,"y":14,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-1,-1,1,1],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[5,17,5]},"MCircle5":{"section_segments":14,"offset":{"x":65.6,"y":18,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-1,-1,1,1],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[5,17,5]},"MCircle6":{"section_segments":14,"offset":{"x":66.2,"y":22,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-1,-1,1,1],"z":[0,0,0,0]},"width":[0,5,5,0],"height":[0,5,5,0],"texture":[5,17,5]},"MainCircle":{"section_segments":8,"offset":{"x":25,"y":12,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-1,-1,1,1],"z":[0,0,0,0]},"width":[0,14,14,0],"height":[0,4,4,0],"texture":[5,17,5]},"MainCircle2":{"section_segments":8,"offset":{"x":35,"y":12,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-1,-1,1,1],"z":[0,0,0,0]},"width":[0,5.1,5.1,0],"height":[0,5.1,5.1,0],"texture":[5,17,5]},"MainCircle3":{"section_segments":8,"offset":{"x":25,"y":38,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-1,-1,1,1],"z":[0,0,0,0]},"width":[0,14,14,0],"height":[0,4,4,0],"texture":[5,17,5]},"MainCircle4":{"section_segments":8,"offset":{"x":35,"y":38,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-1,-1,1,1],"z":[0,0,0,0]},"width":[0,5.1,5.1,0],"height":[0,5.1,5.1,0],"texture":[5,17,5]},"MainCircle5":{"section_segments":8,"offset":{"x":25,"y":-13,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-1,-1,1,1],"z":[0,0,0,0]},"width":[0,12,12,0],"height":[0,3,3,0],"texture":[5,17,5]},"MainCircle6":{"section_segments":8,"offset":{"x":35,"y":-13,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-1,-1,1,1],"z":[0,0,0,0]},"width":[0,3.1,3.1,0],"height":[0,3.1,3.1,0],"texture":[5,17,5]},"Circle":{"section_segments":8,"offset":{"x":18,"y":-31,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,2,2,0],"texture":[5,17,5]},"Circle2":{"section_segments":8,"offset":{"x":18,"y":-28.5,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,2,2,0],"texture":[5,17,5]},"Circle3":{"section_segments":8,"offset":{"x":18,"y":-26,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,2,2,0],"texture":[5,17,5]},"Circle4":{"section_segments":8,"offset":{"x":18,"y":-23.5,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,2,2,0],"texture":[5,17,5]},"Circle5":{"section_segments":8,"offset":{"x":18,"y":-6,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,2,2,0],"texture":[5,17,5]},"Circle_1":{"section_segments":8,"offset":{"x":18,"y":-3.5,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,2,2,0],"texture":[5,17,5]},"Circle2_1":{"section_segments":8,"offset":{"x":18,"y":-1,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,2,2,0],"texture":[5,17,5]},"Circle3_1":{"section_segments":8,"offset":{"x":18,"y":1.5,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,2,2,0],"texture":[5,17,5]},"Circle4_1":{"section_segments":8,"offset":{"x":18,"y":4,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,2,2,0],"texture":[5,17,5]},"Circle5_1":{"section_segments":8,"offset":{"x":18,"y":-21,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,2,2,0],"texture":[5,17,5]},"Circle_2":{"section_segments":8,"offset":{"x":18,"y":19,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,2,2,0],"texture":[5,17,5]},"Circle2_2":{"section_segments":8,"offset":{"x":18,"y":21.5,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,2,2,0],"texture":[5,17,5]},"Circle3_2":{"section_segments":8,"offset":{"x":18,"y":24,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,2,2,0],"texture":[5,17,5]},"Circle4_2":{"section_segments":8,"offset":{"x":18,"y":26.5,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,2,2,0],"texture":[5,17,5]},"Circle5_2":{"section_segments":8,"offset":{"x":18,"y":29,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,2,2,0],"texture":[5,17,5]},"Circle_3":{"section_segments":8,"offset":{"x":18,"y":44,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,2,2,0],"texture":[5,17,5]},"Circle2_3":{"section_segments":8,"offset":{"x":18,"y":46.5,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,2,2,0],"texture":[5,17,5]},"Circle3_3":{"section_segments":8,"offset":{"x":18,"y":49,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,2,2,0],"texture":[5,17,5]},"Circle4_3":{"section_segments":8,"offset":{"x":18,"y":51.5,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,2,2,0],"texture":[5,17,5]},"Circle5_3":{"section_segments":8,"offset":{"x":18,"y":54,"z":10},"position":{"x":[0,0,0,0,0,0,0],"y":[0,0,1.5,1.5],"z":[0,0,0,0]},"width":[0,4,4,0],"height":[0,2,2,0],"texture":[5,17,5]}},"wings":{"main":{"offset":{"x":60,"y":10,"z":2},"length":[30,0],"width":[90,40,20],"angle":[-10,10],"position":[0,20,20],"doubleside":true,"texture":[18],"bump":{"position":30,"size":5}},"winglets":{"length":[25],"width":[30,15,20],"angle":[0,0],"position":[-50,-70,-65],"bump":{"position":0,"size":15},"texture":63,"doubleside":true,"offset":{"x":0,"y":-40,"z":2}},"side":{"doubleside":true,"offset":{"x":85,"y":47,"z":-14},"length":[10,5,10],"width":[25,50,50,25],"angle":[60,90,120,90],"position":[0,-20,-20,0],"texture":[63],"bump":{"position":0,"size":5}},"top":{"doubleside":true,"offset":{"x":10,"y":75,"z":8},"length":[30],"width":[50,20],"angle":[50],"position":[0,20],"texture":[63],"bump":{"position":10,"size":10}},"soutient":{"doubleside":true,"offset":{"x":0,"y":-25,"z":-10},"length":[40,20],"width":[15,15,10],"angle":[0,30],"position":[0,0,0],"texture":[8,63],"bump":{"position":50,"size":2}},"soutient1":{"doubleside":true,"offset":{"x":0,"y":0,"z":-10},"length":[40,20],"width":[15,15,10],"angle":[0,30],"position":[0,0,0],"texture":[8,63],"bump":{"position":50,"size":2}},"soutient2":{"doubleside":true,"offset":{"x":0,"y":25,"z":-10},"length":[40,20],"width":[15,15,10],"angle":[0,30],"position":[0,0,0],"texture":[8,63],"bump":{"position":50,"size":2}},"soutient3":{"doubleside":true,"offset":{"x":0,"y":50,"z":-10},"length":[40,20],"width":[15,15,10],"angle":[0,30],"position":[0,0,0],"texture":[8,63],"bump":{"position":50,"size":2}},"soutienttop":{"doubleside":true,"offset":{"x":0,"y":-25,"z":10},"length":[40,20],"width":[15,15,10],"angle":[0,-30],"position":[0,0,0],"texture":[8,63],"bump":{"position":50,"size":2}},"soutient1top":{"doubleside":true,"offset":{"x":0,"y":0,"z":10},"length":[40,20],"width":[15,15,10],"angle":[0,-30],"position":[0,0,0],"texture":[8,63],"bump":{"position":50,"size":2}},"soutient2top":{"doubleside":true,"offset":{"x":0,"y":25,"z":10},"length":[40,20],"width":[15,15,10],"angle":[0,-30],"position":[0,0,0],"texture":[8,63],"bump":{"position":50,"size":2}},"soutient3top":{"doubleside":true,"offset":{"x":0,"y":50,"z":10},"length":[40,20],"width":[15,15,10],"angle":[0,-30],"position":[0,0,0],"texture":[8,63],"bump":{"position":50,"size":2}}},"typespec":{"name":"Preculsor","level":6,"model":7,"code":607,"specs":{"shield":{"capacity":[400,400],"reload":[6,6]},"generator":{"capacity":[550,550],"reload":[80,80]},"ship":{"mass":250,"speed":[130,130],"rotation":[90,90],"acceleration":[130,130]}},"shape":[5.4,4.733,4.325,3.517,3.209,2.614,2.196,1.952,2.673,2.668,2.638,2.778,2.979,3.298,3.424,3.546,3.706,3.742,3.354,3.383,3.037,2.845,3.869,4.222,4.378,4.328,4.378,4.222,3.869,2.845,3.037,3.383,3.354,3.742,3.706,3.546,3.424,3.298,2.979,2.778,2.638,2.668,2.673,1.952,2.196,2.614,3.209,3.517,4.325,4.733],"lasers":[{"x":1.26,"y":-3.24,"z":0,"angle":0,"damage":[2,5],"rate":4,"type":1,"speed":[180,200],"number":6,"spread":0,"error":2,"recoil":20},{"x":-1.26,"y":-3.24,"z":0,"angle":0,"damage":[2,5],"rate":4,"type":1,"speed":[180,200],"number":6,"spread":0,"error":2,"recoil":20}],"radius":5.4}}';
var Contraband_608 = '{"name":"Contraband","level":6,"model":8,"size":1.6,"zoom":0.85,"specs":{"shield":{"capacity":[275,275],"reload":[8,8]},"generator":{"capacity":[200,200],"reload":[42.5,42.5]},"ship":{"mass":150,"speed":[125,125],"rotation":[90,80],"acceleration":[120,120]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-75,-80,-20,0,15,20,60,65,80,100,90],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,8,24,26,20,20,20,20,25,12,0],"height":[0,5,25,25,20,15,15,15,20,10,0],"texture":[1,2,4,63,5,10,5,63,4,17],"propeller":true,"laser":{"damage":[100,150],"rate":1,"type":2,"speed":[110,150],"recoil":250,"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-55,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-10,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,5,10,10,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":8,"offset":{"x":35,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,-4,6,15,20,35,40,50,85,75],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,18,18,10,0],"height":[0,15,20,20,20,15,15,18,16,10,0],"propeller":true,"texture":[4,4,63,3,5,8,5,63,4,17]},"cannons":{"section_segments":12,"offset":{"x":18,"y":65,"z":20},"position":{"x":[0,0,0,0,0],"y":[-50,-45,-20,-5,5],"z":[0,0,0,0,0]},"width":[0,5,7,8,0],"height":[0,5,7,8,0],"angle":0,"laser":{"damage":[4,8],"rate":4,"type":1,"speed":[150,200],"number":1,"error":0},"propeller":false,"texture":[6,4,63,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":20,"z":0},"length":[37,0],"width":[20,70],"angle":[0],"position":[-95,0],"texture":[63],"doubleside":true,"bump":{"position":0,"size":0}},"join2":{"offset":{"x":25,"y":52,"z":0},"length":[35],"width":[10,10],"angle":[0],"position":[0,0,0,50],"texture":[8],"doubleside":1,"bump":{"position":0,"size":0}},"wing1":{"doubleside":true,"offset":{"x":50,"y":52,"z":-36},"length":[0,30,20,30],"width":[0,0,100,100,0],"angle":[110,70,90,110],"position":[0,0,0,0,0],"texture":[63],"bump":{"position":0,"size":5}}},"typespec":{"name":"Contraband","level":6,"model":8,"code":608,"specs":{"shield":{"capacity":[275,275],"reload":[8,8]},"generator":{"capacity":[200,200],"reload":[42.5,42.5]},"ship":{"mass":150,"speed":[125,125],"rotation":[90,80],"acceleration":[120,120]}},"shape":[2.72,2.573,2.079,1.758,1.578,1.455,1.368,1.312,1.283,1.278,1.269,1.222,1.193,1.961,2.033,2.148,2.313,2.561,2.818,3.145,3.625,3.791,3.803,3.701,3.223,3.206,3.223,3.701,3.803,3.791,3.625,3.145,2.818,2.561,2.313,2.148,2.033,1.961,1.193,1.222,1.269,1.278,1.283,1.312,1.368,1.455,1.578,1.758,2.079,2.573],"lasers":[{"x":0,"y":-2.56,"z":0,"angle":0,"damage":[100,150],"rate":1,"type":2,"speed":[110,150],"number":1,"spread":0,"error":0,"recoil":250},{"x":0.576,"y":0.48,"z":0.64,"angle":0,"damage":[4,8],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.576,"y":0.48,"z":0.64,"angle":0,"damage":[4,8],"rate":4,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.803}}';
var NanoNemesis_609 = '{"name":"NanoNemesis","designer":"Basit","level":6,"model":9,"size":1.3,"zoom":0.9,"specs":{"shield":{"capacity":[320,320],"reload":[5,7]},"generator":{"capacity":[64,64],"reload":[100,100]},"ship":{"mass":300,"speed":[120,120],"rotation":[65,65],"acceleration":[140,140]}},"tori":{"circle":{"segments":[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5,382.5],"radius":35,"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0,"y":-35,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[12,12,12,12,12,12,12,12,12],"height":[3.6,3.6,3.6,3.6,3.6,3.6,3.6,3.6,3.6],"texture":3}},"bodies":{"main1":{"section_segments":[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5,382.5],"offset":{"x":0,"y":-47,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[5,4,12,40,50,90,100,120,140,140,110],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,24,25,25,32,32,32,30,24,22.5,0],"height":[0,24,25,25,32,32,32,30,24,22.5,0],"texture":[4,63,11.1,4,10.34,4,8.3,13,17],"propeller":true},"main2":{"section_segments":[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5,382.5],"offset":{"x":0.12,"y":-47,"z":-0.1},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[5,4,12,40,50,90,100,120,140,140,110],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,24,25,25,32,32,32,30,24,22.5,0],"height":[0,24,25,25,32,32,32,30,24,22.5,0],"texture":[4,63,11.1,4,10.1,4,8.1,13,17],"propeller":true},"cockpit":{"section_segments":[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5,382.5],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[-11,-10,0,0,5,5],"z":[0,0,0,0,0,0,0,0]},"width":[0,25.5,31.5,33,33,0],"height":[0,25.5,31.5,32,33,0],"texture":[7,7,2,2],"propeller":false},"cockpit_P1":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0],"y":[-10,-12,-12.5,0,0],"z":[0,0,0,0,0,0,0]},"width":[22,22,21,28,0],"height":[22,22,25,32,0],"texture":[2],"propeller":false},"cockpit_P2":{"section_segments":[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5,382.5],"offset":{"x":0,"y":-3,"z":0},"position":{"x":[0,0,0,0],"y":[-10,-10,0,0],"z":[0,0,0,0]},"width":[0,25.5,25.5,0],"height":[0,25.5,25.5,0],"texture":[2],"propeller":false},"engines":{"section_segments":[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5,382.5],"offset":{"x":60,"y":0,"z":-11},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-5,10,10,0,10,50,60,75,95,115,115,100],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,4.5,5.5,14,21,20,19,15,18,15,14,0],"height":[0,4.5,5.5,14,21,20,19,15,18,15,14,0],"texture":[2,17,13,4,18.1,63,4,8.1,13,17],"propeller":1},"center":{"section_segments":[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5,382.5],"offset":{"x":0,"y":-150,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[15,15,48,50,60,62,97,102,163],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,8,8,24,24,8,8,10,10],"height":[0,8,8,24,24,8,8,10,10],"texture":[3,3,4,63,4,12,63,4],"propeller":false},"ad1":{"angle":90,"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":6,"y":22,"z":15.106382978723406},"position":{"x":[0,0,0,0,-3,-3,-6,-6,-10,-10,-10],"y":[15,15,25,25,35,35,45,45,60,55,55],"z":[0,0,0,0,-1,-1,-4,-4,-10,-10,-10]},"width":[0,18.5,18.5,11,8,8,8,8,8,8,0],"height":[0,3,3,2,2,2.5,2.5,2,2,2,0],"texture":[15,4,2,3,2,63,2,4,4,17]},"ad2":{"angle":90,"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":2,"y":22,"z":-20.7},"position":{"x":[0,0,0,0,-3,-3,-9,-9,-13,-13,-13],"y":[15,15,25,25,30,30,40,40,55,50,50],"z":[0,0,0,0,1,1,4,4,10,10,10]},"width":[0,18.5,18.5,11,10.5,10.5,8,8,8,8,0],"height":[0,3,3,2,2,2.5,2.5,2,2,2,0],"texture":[15,4,2,63,63,4]},"ad3":{"angle":90,"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":6,"y":22,"z":-15.106382978723406},"position":{"x":[0,0,0,0,-3,-3,-9,-9,-13,-13,-13],"y":[15,15,25,25,30,30,40,40,55,50,50],"z":[0,0,0,0,1,1,4,4,10,10,10]},"width":[0,18.5,18.5,11,10.5,10.5,8,8,8,8,0],"height":[0,3,3,2,2,2.5,2.5,2,2,2,0],"texture":[15,4,2,63,63,4]},"adP1":{"angle":90,"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0,"y":32,"z":19},"position":{"x":[0,0,0.4,0],"y":[11,11,27.5,27.5],"z":[0,0,-9.8,-9.8]},"width":[0,2,2,0],"height":[0,11.3,11.3,0],"texture":4},"adP2":{"angle":90,"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0,"y":9.5,"z":19},"position":{"x":[0,0,0.4,0],"y":[11,11,27.5,27.5],"z":[0,0,-9.8,-9.8]},"width":[0,2,2,0],"height":[0,11.3,11.3,0],"texture":4},"adP3":{"angle":90,"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0,"y":19.2,"z":19},"position":{"x":[0,0,0.4,0],"y":[11,11,27.5,27.5],"z":[0,0,-9.8,-9.8]},"width":[0,2,2,0],"height":[0,11.3,11.3,0],"texture":4},"adP4":{"angle":90,"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0,"y":25.6,"z":19},"position":{"x":[0,0,0.4,0],"y":[11,11,27.5,27.5],"z":[0,0,-9.8,-9.8]},"width":[0,2,2,0],"height":[0,11.3,11.3,0],"texture":4},"adP5_6":{"angle":90,"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":1,"y":35,"z":19},"position":{"x":[0,0,0.4,0],"y":[10,10,26.5,26.5],"z":[0,0,-9.8,-9.8]},"width":[0,2,2,0],"height":[0,11.3,11.3,0],"texture":4},"adP7":{"angle":90,"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0,"y":25.5,"z":19},"position":{"x":[0,0,0.4,0],"y":[-27.5,-27.5,-11,-11],"z":[-9.8,-9.8,0,0]},"width":[0,2,2,0],"height":[0,11.3,11.3,0],"texture":4},"adP8":{"angle":90,"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0,"y":19,"z":19},"position":{"x":[0,0,0.4,0],"y":[-27.5,-27.5,-11,-11],"z":[-9.8,-9.8,0,0]},"width":[0,2,2,0],"height":[0,11.3,11.3,0],"texture":4},"br1":{"section_segments":[45,135,225,315],"offset":{"x":9,"y":30,"z":-22.25},"position":{"x":[0,0,0,0,0],"y":[-1,-1,0,1,1],"z":[0,0,0,0,0]},"width":[0,1,1,1,0],"height":[0,21,21,19,0],"texture":63,"angle":0,"vertical":true},"cannons1":{"section_segments":8,"offset":{"x":0,"y":-150,"z":16},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[15,10,35,40,70,65,97,102,163],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,4,5,6,6,4,4,6,6],"height":[0,4,5,6,6,4,4,6,6],"texture":[17,3,63,8,4,4,63,3],"propeller":false,"laser":{"damage":[8,8],"rate":6,"type":2,"speed":[220,220],"recoil":10,"number":1,"error":1}},"cannons2":{"section_segments":8,"offset":{"x":0,"y":-150,"z":11},"position":{"x":[11,11,11,11,11,11,11,11,11,11],"y":[15,10,35,40,70,65,97,102,163],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,4,5,6,6,4,4,6,6],"height":[0,4,5,6,6,4,4,6,6],"texture":[17,3,63,8,4,4,63,3],"propeller":false,"laser":{"damage":[8,8],"rate":6,"type":2,"speed":[220,220],"recoil":10,"number":1,"error":1}},"cannons3":{"section_segments":8,"offset":{"x":0,"y":-150,"z":0},"position":{"x":[16,16,16,16,16,16,16,16,16,16],"y":[15,10,35,40,70,65,97,102,163],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,4,5,6,6,4,4,6,6],"height":[0,4,5,6,6,4,4,6,6],"texture":[17,3,63,8,4,4,63,3],"propeller":false,"laser":{"damage":[8,8],"rate":6,"type":2,"speed":[220,220],"recoil":10,"number":1,"error":1}},"cannons4":{"section_segments":8,"offset":{"x":0,"y":-150,"z":-11},"position":{"x":[11,11,11,11,11,11,11,11,11,11],"y":[15,10,35,40,70,65,97,102,163],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,4,5,6,6,4,4,6,6],"height":[0,4,5,6,6,4,4,6,6],"texture":[17,3,63,8,4,4,63,3],"propeller":false,"laser":{"damage":[8,8],"rate":6,"type":2,"speed":[220,220],"recoil":10,"number":1,"error":1}},"cannons5":{"section_segments":8,"offset":{"x":0,"y":-150,"z":-16},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[15,10,35,40,70,65,97,102,163],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,4,5,6,6,4,4,6,6],"height":[0,4,5,6,6,4,4,6,6],"texture":[17,3,63,8,4,4,63,3],"propeller":false,"laser":{"damage":[8,8],"rate":6,"type":2,"speed":[220,220],"recoil":10,"number":1,"error":1}},"cannons6":{"section_segments":8,"offset":{"x":0,"y":-150,"z":-11},"position":{"x":[-11,-11,-11,-11,-11,-11,-11,-11,-11,-11],"y":[15,10,35,40,70,65,97,102,163],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,4,5,6,6,4,4,6,6],"height":[0,4,5,6,6,4,4,6,6],"texture":[17,3,63,8,4,4,63,3],"propeller":false,"laser":{"damage":[8,8],"rate":6,"type":2,"speed":[220,220],"recoil":10,"number":1,"error":1}},"cannons7":{"section_segments":8,"offset":{"x":0,"y":-150,"z":0},"position":{"x":[-16,-16,-16,-16,-16,-16,-16,-16,-16,-16],"y":[15,10,35,40,70,65,97,102,163],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,4,5,6,6,4,4,6,6],"height":[0,4,5,6,6,4,4,6,6],"texture":[17,3,63,8,4,4,63,3],"propeller":false,"laser":{"damage":[8,8],"rate":6,"type":2,"speed":[220,220],"recoil":10,"number":1,"error":1}},"cannons8":{"section_segments":8,"offset":{"x":0,"y":-150,"z":11},"position":{"x":[-11,-11,-11,-11,-11,-11,-11,-11,-11,-11],"y":[15,10,35,40,70,65,97,102,163],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,4,5,6,6,4,4,6,6],"height":[0,4,5,6,6,4,4,6,6],"texture":[17,3,63,8,4,4,63,3],"propeller":false,"laser":{"damage":[8,8],"rate":6,"type":2,"speed":[220,220],"recoil":10,"number":1,"error":1}}},"wings":{"er":{"offset":{"x":20,"y":-2,"z":-11},"length":[40,19,40],"width":[65,25,50,20],"angle":[0,0,0,0,0,0,0,0,0],"position":[45,25,45,75],"texture":[3,63,63,4,1,63],"doubleside":true,"bump":{"position":50,"size":8}},"r":{"offset":{"x":60,"y":-10,"z":-11},"length":[1.5,18,35],"width":[5,15,50,25],"angle":[45,45,45],"position":[20,25,45,70],"texture":[4,63,2],"doubleside":true,"bump":{"position":50,"size":8}},"e":{"offset":{"x":60,"y":-10,"z":-11},"length":[1.5,18,35],"width":[5,15,50,25],"angle":[-45,-45,-45],"position":[20,25,45,70],"texture":[4,63,1],"doubleside":true,"bump":{"position":50,"size":8}},"outer":{"offset":{"x":50,"y":-110,"z":0},"length":[0,8,8,8,0],"width":[0,140,110,80,50,20,-10],"angle":[0,0,0,0,0,0],"position":[40,40,55,70,85,100,101],"texture":[4,3,4,63,63],"doubleside":true,"bump":{"position":50,"size":6}},"outerpart":{"offset":{"x":25,"y":-20,"z":0},"length":[15,15],"width":[45,45,45],"angle":[0,0],"position":[7.5,0,-10],"texture":[3,63,63],"doubleside":true,"bump":{"position":50,"size":4}},"inner1":{"offset":{"x":22,"y":-85,"z":22},"length":[0,7],"width":[0,145,80],"angle":[45,45],"position":[0,-10,30],"texture":63,"doubleside":true,"bump":{"position":50,"size":6}},"inner2":{"offset":{"x":22,"y":-85,"z":-22},"length":[0,7],"width":[0,145,80],"angle":[-45,-45],"position":[0,-10,30],"texture":63,"doubleside":true,"bump":{"position":50,"size":6}},"inner3":{"offset":{"x":30,"y":-85,"z":0},"length":[0,7],"width":[0,145,80],"angle":[0,0],"position":[0,-10,30],"texture":63,"doubleside":true,"bump":{"position":50,"size":6}},"inner4":{"offset":{"x":0,"y":-85,"z":30},"length":[0,7],"width":[0,145,80],"angle":[90,90],"position":[0,-10,30],"texture":63,"doubleside":true,"bump":{"position":50,"size":6}},"inner5":{"offset":{"x":0,"y":-85,"z":-30},"length":[0,7],"width":[0,145,80],"angle":[-90,-90],"position":[0,-10,30],"texture":63,"doubleside":true,"bump":{"position":50,"size":6}}},"typespec":{"name":"NanoNemesis","level":6,"model":9,"code":609,"specs":{"shield":{"capacity":[320,320],"reload":[5,7]},"generator":{"capacity":[64,64],"reload":[100,100]},"ship":{"mass":300,"speed":[120,120],"rotation":[65,65],"acceleration":[140,140]}},"shape":[4.355,4.424,4.242,3.865,3.403,2.982,2.692,2.487,2.35,2.193,2.066,1.985,1.939,2.081,2.184,2.711,3.53,3.772,3.504,3.106,3.554,3.541,3.304,2.487,2.461,2.423,2.461,2.487,3.304,3.541,3.554,3.106,3.504,3.772,3.53,2.711,2.184,2.081,1.939,1.985,2.066,2.193,2.35,2.487,2.692,2.982,3.403,3.865,4.242,4.424],"lasers":[{"x":0,"y":-3.64,"z":0.416,"angle":0,"damage":[8,8],"rate":6,"type":2,"speed":[220,220],"number":1,"spread":0,"error":1,"recoil":10},{"x":0.286,"y":-3.64,"z":0.286,"angle":0,"damage":[8,8],"rate":6,"type":2,"speed":[220,220],"number":1,"spread":0,"error":1,"recoil":10},{"x":0.416,"y":-3.64,"z":0,"angle":0,"damage":[8,8],"rate":6,"type":2,"speed":[220,220],"number":1,"spread":0,"error":1,"recoil":10},{"x":0.286,"y":-3.64,"z":-0.286,"angle":0,"damage":[8,8],"rate":6,"type":2,"speed":[220,220],"number":1,"spread":0,"error":1,"recoil":10},{"x":0,"y":-3.64,"z":-0.416,"angle":0,"damage":[8,8],"rate":6,"type":2,"speed":[220,220],"number":1,"spread":0,"error":1,"recoil":10},{"x":-0.286,"y":-3.64,"z":-0.286,"angle":0,"damage":[8,8],"rate":6,"type":2,"speed":[220,220],"number":1,"spread":0,"error":1,"recoil":10},{"x":-0.416,"y":-3.64,"z":0,"angle":0,"damage":[8,8],"rate":6,"type":2,"speed":[220,220],"number":1,"spread":0,"error":1,"recoil":10},{"x":-0.286,"y":-3.64,"z":0.286,"angle":0,"damage":[8,8],"rate":6,"type":2,"speed":[220,220],"number":1,"spread":0,"error":1,"recoil":10}],"radius":4.424}}';
var Machete_610 = '{"name":"Machete","level":6,"model":10,"size":3.6,"zoom":0.9,"specs":{"shield":{"capacity":[470,470],"reload":[9,9]},"generator":{"capacity":[345,345],"reload":[75,75]},"ship":{"mass":380,"speed":[75,75],"rotation":[45,45],"acceleration":[100,100]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":-10,"z":2},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[-47,-49,-50,-40,-18,-10,4,14,30,50,65,62],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,7,10,13,15,13,18,18,15,15,0],"height":[0,6,8.4,11,14,14,16,15,14,13,10,0],"texture":[12,18,4,10,2,8,63,2,18,4,18],"angle":0,"propeller":false},"cannons":{"section_segments":8,"offset":{"x":14.7,"y":-133,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,4,4],"y":[15,14,31,36,37.5,63,68,87,94,113],"z":[0,0,0,0,0,0,0,0,0,1,0]},"width":[0,3.5,3.6,4.6,4.6,4.6,3.5,3.5,7,0],"height":[0,4,4,5,5,5,3.5,3.5,5,4],"texture":[17,13,4,63,8,4,13,4,63],"propeller":false,"laser":{"damage":[50,50],"rate":1,"type":2,"speed":[240,240],"recoil":0,"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-11,"z":11},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-35,-35,-22,-10,2,10,20,35,30],"z":[0,0,0,0,0,0,-1,-1,-1]},"width":[0,5,7.5,9,8,9.5,8,6,0],"height":[0,2.6,7,12,12,10,8,7.5,0],"texture":[7,9,9,9,10,63,3],"laser":{"damage":[5,5],"rate":8,"type":1,"speed":[200,200],"recoil":0,"number":1,"error":0}},"railgun_side":{"section_segments":[0,45,90,135,180],"offset":{"x":-34,"y":40,"z":0},"position":{"x":[14,13.5,13.5,13,13,15,13,13.5,29,29],"y":[-150,-108,-80,-65,-40,-30,-15,-10],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,7,17,8,8,10,4,0],"height":[0,4,6.9,8,10,11,10,0],"texture":[2,63,4,3,13,3,63,2,18],"angle":0},"sides":{"section_segments":8,"offset":{"x":29,"y":35,"z":-3},"position":{"x":[-8,-1,-1,-2,-2.6,3,11],"y":[-80,-55,-38,-28,-11,5,40],"z":[0,0,0,2,2,8.4,8,8,1]},"width":[0,6,8,16,10,8,0],"height":[0,5.5,10.8,10,11,8,0],"propeller":false,"texture":[2,4,63,11,4,2]},"intake":{"section_segments":8,"offset":{"x":24,"y":-20,"z":10},"position":{"x":[-3.6,-3.4,-8.2,-7,-9,-9,-9.5,-9.5],"y":[-10,20,37,50,62,77,85,80],"z":[-2.2,-3,0,0,0,0,0,0,0,0,0]},"width":[0,7,9.8,12,12,11,9,0],"height":[0,8,10,12,12,10,8,0],"texture":[2,4,3,63,8,4,17],"propeller":true},"intake2":{"section_segments":8,"offset":{"x":24,"y":-35,"z":-5},"position":{"x":[-3.6,-3.4,-8.2,-7,-9,-9,-9.5,-9.5],"y":[-10,20,37,50,62,77,85,80],"z":[-1,-3,0,0,0,0,0,0,0,0,0]},"width":[0,7,9.8,12,8,8,5,0],"height":[0,8,10,12,12,10,6,0],"texture":[2,3,4,8,63,13,17],"propeller":true}},"wings":{"main":{"doubleside":true,"offset":{"x":31,"y":2,"z":-2.1},"length":[0,13,12,18],"width":[0,50,28,45,0],"angle":[-10,0,-20,10],"position":[-3,-3,-1,3,-30],"texture":[13,8,63,4],"bump":{"position":19.5,"size":8}},"glow":{"offset":{"x":5,"y":20,"z":0},"length":[0,20],"width":[0,72,60],"doubleside":true,"texture":[11],"angle":[0,0],"position":[-40,-40,0],"bump":{"position":-11,"size":20}},"main_winglets":{"doubleside":true,"length":[0,20.4],"width":[0,20,26],"angle":[-10.5,-10.5],"position":[-12,-12,-29],"bump":{"position":-30,"size":10},"texture":63,"offset":{"x":35.5,"y":43,"z":-2.5}},"main_front":{"doubleside":true,"offset":{"x":25,"y":-40,"z":-5},"length":[0,19,11.2],"width":[0,38,20,15],"angle":[2,2,-10],"position":[10,10,27,30],"texture":[13,13,63],"bump":{"position":12,"size":7}},"teeth":{"doubleside":true,"offset":{"x":25,"y":-90,"z":-4},"length":[0,12],"width":[0,80,0],"angle":[-10,-10,0],"position":[0,0,20,-5],"texture":[12,4],"bump":{"position":28,"size":6.3}},"rails":{"doubleside":true,"offset":{"x":18.5,"y":-45,"z":0},"length":[0,2,5],"width":[0,140,126,20],"angle":[0,0,0],"position":[0,0,0,0],"texture":[12,13,3,63],"bump":{"position":30,"size":8}}},"typespec":{"name":"Machete","level":6,"model":10,"code":610,"specs":{"shield":{"capacity":[470,470],"reload":[9,9]},"generator":{"capacity":[345,345],"reload":[75,75]},"ship":{"mass":380,"speed":[75,75],"rotation":[45,45],"acceleration":[100,100]}},"shape":[4.328,8.668,9.532,7.305,6.008,4.444,4.082,3.559,3.561,3.886,5.63,5.169,4.831,4.605,4.465,4.404,4.448,4.325,4.108,4.501,5.358,6.12,4.976,4.92,4.764,3.968,4.764,4.92,4.976,6.12,5.358,4.501,4.108,4.325,4.448,4.404,4.465,4.605,4.831,5.169,5.63,3.886,3.561,3.559,4.082,4.444,6.008,7.305,9.532,8.668],"lasers":[{"x":1.058,"y":-8.568,"z":0,"angle":0,"damage":[50,50],"rate":1,"type":2,"speed":[240,240],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.058,"y":-8.568,"z":0,"angle":0,"damage":[50,50],"rate":1,"type":2,"speed":[240,240],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-3.312,"z":0.792,"angle":0,"damage":[5,5],"rate":8,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":9.532}}';
//Juggernauts
var Crystallid_799 = '{"name":"Crystallid","level":7.9,"model":9,"size":6,"specs":{"shield":{"capacity":[40000,40000],"reload":[5,5]},"generator":{"capacity":[4300,4300],"reload":[1700,1700]},"ship":{"mass":1800,"speed":[40,40],"rotation":[8,8],"acceleration":[150,150]}},"tori":{"circleMid":{"segments":16,"radius":35,"section_segments":12,"offset":{"x":10,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],"height":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"texture":[16.4]},"circleBack":{"segments":16,"radius":20,"section_segments":12,"offset":{"x":0,"y":40,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],"height":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"texture":[16]},"circleFront":{"segments":16,"radius":40,"section_segments":12,"offset":{"x":0,"y":-80,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],"height":[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"texture":[16.5]},"connectorF":{"segments":16,"radius":47,"section_segments":12,"offset":{"x":10,"y":20,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15],"height":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"texture":[8]},"connectorB":{"segments":16,"radius":50,"section_segments":12,"offset":{"x":10,"y":-68,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"y":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"z":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},"width":[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],"height":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"texture":[8]}},"bodies":{"engine":{"section_segments":16,"offset":{"x":0,"y":62,"z":0},"position":{"x":[0,0,0,0],"y":[10,10,10,10],"z":[0,0,0,0]},"width":[30,30,30,30],"height":[30,30,30,30],"doubleside":true,"propeller":true},"right":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[40,45,60,65,60,55,50],"y":[-140,-130,-60,0,60,90,80],"z":[0,0,0,0,0,0,0]},"width":[0,5,15,15,15,5,0],"height":[0,10,25,25,15,10,0],"texture":[17,4,4,4,12],"angle":0,"propeller":true,"laser":{"damage":[10,10],"rate":10,"type":1,"speed":[150,150],"number":1,"error":10}},"left":{"section_segments":8,"offset":{"x":0,"y":-30,"z":0},"position":{"x":[35,34,37,45,63,65,58,51,40,45],"y":[-200,-220,-195,-130,-80,20,80,120,163,130],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,12,15,15,15,15,15,15,5,0],"height":[0,10,10,20,25,25,25,25,15,10,0],"texture":[17,13,18,18,18,18,18,18,17],"angle":180,"propeller":false},"left_cannon":{"section_segments":6,"offset":{"x":0,"y":-135,"z":0},"position":{"x":[-42,-42],"y":[-40,-50],"z":[0,0]},"width":[0,5],"height":[0,5],"angle":0,"laser":{"damage":[20,20],"rate":2.5,"type":1,"speed":[160,180],"number":1,"error":5},"propeller":false,"texture":[17,17]},"deathray":{"section_segments":4,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0],"y":[0,0],"z":[0,0]},"width":[2,1],"height":[2,1],"laser":{"damage":[90,90],"rate":0.15,"type":2,"speed":[180,180],"number":6,"error":0,"propeller":false},"texture":[1]},"left_propulsor":{"section_segments":6,"offset":{"x":0,"y":185,"z":0},"position":{"x":[-35,-35],"y":[0,5],"z":[0,0]},"width":[0,10],"height":[0,10],"texture":[1],"propeller":true},"topRight":{"section_segments":8,"offset":{"x":0,"y":0,"z":52},"position":{"x":[20,24,30,32,30,26,20],"y":[-160,-140,-80,10,50,80,110],"z":[-15,-10,0,-5,-15,-20,-29]},"height":[0,5,15,15,15,5,0],"width":[0,5,15,20,15,10,0],"texture":[17,18,18,18,18,16],"propeller":false},"bottomLeft":{"section_segments":8,"offset":{"x":0,"y":-20,"z":-52},"position":{"x":[-20,-24,-30,-32,-30,-26,-20],"y":[-160,-140,-80,10,50,80,110],"z":[15,10,0,5,15,20,29]},"height":[0,5,15,15,15,5,0],"width":[0,5,15,20,15,10,0],"texture":[17,18,18,18,18,16],"propeller":false},"topLeft":{"section_segments":8,"offset":{"x":0,"y":0,"z":52},"position":{"x":[-20,-24,-30,-32,-30,-26,-20],"y":[-180,-160,-110,0,60,110,150],"z":[-15,-10,-8,-5,-15,-20,-29]},"height":[0,2,7,7,7,2,0],"width":[0,2,7,10,7,5,0],"texture":[17,4,4,4,4,4],"propeller":false},"bottomRight":{"section_segments":8,"offset":{"x":0,"y":-10,"z":-52},"position":{"x":[20,24,30,32,30,26,20],"y":[-180,-160,-110,0,60,110,150],"z":[15,10,0,5,15,20,29]},"height":[0,2,7,7,7,2,0],"width":[0,2,7,10,7,5,0],"texture":[17,4,4,4,4,4],"propeller":false},"turret1":{"section_segments":12,"offset":{"x":10,"y":20,"z":58},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-15,-10,0,10,10,20],"z":[0,0,0,0,0,0,0]},"width":[0,1,3,5,1,2,0],"height":[0,1,3,4,1,2,0],"angle":-10,"laser":{"damage":[25,25],"rate":6,"type":1,"speed":[150,150],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[17,4,10,8,16,16]},"turret2":{"section_segments":12,"offset":{"x":10,"y":-70,"z":58},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-15,-10,0,10,10,20],"z":[0,0,0,0,0,0,0]},"width":[0,1,3,5,1,2,0],"height":[0,1,3,4,1,2,0],"angle":-10,"laser":{"damage":[25,25],"rate":6,"type":1,"speed":[150,150],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[17,4,10,8,16,16]},"turret3":{"section_segments":12,"offset":{"x":52,"y":-70,"z":33},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-15,-10,10,15,17,20],"z":[0,0,0,0,0,0,0]},"width":[0,1,3,5,2,2,0],"height":[0,1,3,4,2,2,0],"angle":0,"laser":{"damage":[25,25],"rate":6,"type":1,"speed":[150,150],"number":1,"angle":0,"error":0},"propeller":false,"texture":[17,4,10,8,17,15]},"turret4":{"section_segments":12,"offset":{"x":52,"y":15,"z":33},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,-15,-10,10,15,17,20],"z":[0,0,0,0,0,0,0]},"width":[0,1,3,5,2,2,0],"height":[0,1,3,4,2,2,0],"angle":180,"laser":{"damage":[25,25],"rate":6,"type":1,"speed":[150,150],"number":1,"angle":180,"error":0},"propeller":false,"texture":[17,4,10,8,17,15]},"mortar1":{"section_segments":6,"offset":{"x":-50,"y":0,"z":0},"position":{"x":[0,0,0,0],"y":[-25,-30,-20,0],"z":[0,0,0,0]},"width":[0,15,9,7],"height":[0,10,9,7],"texture":[18],"angle":90,"laser":{"damage":[90,90],"rate":0.3,"type":1,"speed":[80,80],"number":1,"error":0,"angle":90}},"mortar2":{"section_segments":6,"offset":{"x":-50,"y":-35,"z":0},"position":{"x":[0,0,0,0],"y":[-25,-30,-20,0],"z":[0,0,0,0]},"width":[0,15,9,7],"height":[0,10,9,7],"texture":[18],"angle":90,"laser":{"damage":[90,90],"rate":0.3,"type":1,"speed":[80,80],"number":1,"error":0,"angle":90}}},"wings":{"back":{"offset":{"x":22,"y":40,"z":0},"doubleside":true,"length":[30],"width":[6,20],"angle":[0],"position":[0,-20,0,50],"texture":[63],"bump":{"position":5,"size":10}}},"typespec":{"name":"Crystallid","level":7.9,"model":9,"code":799,"specs":{"shield":{"capacity":[40000,40000],"reload":[5,5]},"generator":{"capacity":[4300,4300],"reload":[1700,1700]},"ship":{"mass":1800,"speed":[40,40],"rotation":[8,8],"acceleration":[150,150]}},"shape":[10.581,22.926,18.816,17.137,15.405,13.809,12.653,11.881,11.195,10.954,10.323,9.726,9.675,9.675,9.726,9.993,10.473,11.176,11.754,12.309,12.98,12.789,12.178,15.344,16.971,8.657,23.21,23.459,20.332,16.118,13.716,12.57,11.792,11.277,10.648,10.115,9.733,9.675,9.675,9.826,10.323,10.954,11.72,12.703,14.151,16.163,18.942,21.59,23.781,23.577],"lasers":[{"x":4.8,"y":-16.8,"z":0,"angle":0,"damage":[10,10],"rate":10,"type":1,"speed":[150,150],"number":1,"spread":0,"error":10,"recoil":0},{"x":-5.04,"y":-22.2,"z":0,"angle":0,"damage":[20,20],"rate":2.5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":5,"recoil":0},{"x":0,"y":0,"z":0,"angle":0,"damage":[90,90],"rate":0.15,"type":2,"speed":[180,180],"number":6,"spread":0,"error":0,"recoil":0},{"x":1.617,"y":0.036,"z":6.96,"angle":-10,"damage":[25,25],"rate":6,"type":1,"speed":[150,150],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-1.617,"y":0.036,"z":6.96,"angle":10,"damage":[25,25],"rate":6,"type":1,"speed":[150,150],"number":1,"spread":-10,"error":0,"recoil":0},{"x":1.617,"y":-10.764,"z":6.96,"angle":-10,"damage":[25,25],"rate":6,"type":1,"speed":[150,150],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-1.617,"y":-10.764,"z":6.96,"angle":10,"damage":[25,25],"rate":6,"type":1,"speed":[150,150],"number":1,"spread":-10,"error":0,"recoil":0},{"x":6.24,"y":-10.8,"z":3.96,"angle":0,"damage":[25,25],"rate":6,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-6.24,"y":-10.8,"z":3.96,"angle":0,"damage":[25,25],"rate":6,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":6.24,"y":4.2,"z":3.96,"angle":180,"damage":[25,25],"rate":6,"type":1,"speed":[150,150],"number":1,"spread":180,"error":0,"recoil":0},{"x":-6.24,"y":4.2,"z":3.96,"angle":-180,"damage":[25,25],"rate":6,"type":1,"speed":[150,150],"number":1,"spread":180,"error":0,"recoil":0},{"x":-9.6,"y":0,"z":0,"angle":90,"damage":[90,90],"rate":0.3,"type":1,"speed":[80,80],"number":1,"spread":90,"error":0,"recoil":0},{"x":9.6,"y":0,"z":0,"angle":-90,"damage":[90,90],"rate":0.3,"type":1,"speed":[80,80],"number":1,"spread":90,"error":0,"recoil":0},{"x":-9.6,"y":-4.2,"z":0,"angle":90,"damage":[90,90],"rate":0.3,"type":1,"speed":[80,80],"number":1,"spread":90,"error":0,"recoil":0},{"x":9.6,"y":-4.2,"z":0,"angle":-90,"damage":[90,90],"rate":0.3,"type":1,"speed":[80,80],"number":1,"spread":90,"error":0,"recoil":0}],"radius":23.781}}';
var Lancer_798 = '{"name":"Lancer","level":7.9,"model":8,"size":3.5,"zoom":0.85,"specs":{"shield":{"capacity":[20000,20000],"reload":[2,2]},"generator":{"capacity":[1300,1300],"reload":[400,400]},"ship":{"mass":800,"speed":[90,90],"rotation":[30,30],"acceleration":[80,80]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":20,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[0,-10,40,100,90,100],"z":[0,0,0,0,0,0]},"width":[0,10,23,10,0],"height":[0,5,23,10,0],"texture":[16,10,1,12],"laser":{"damage":[100,100],"rate":1,"type":2,"speed":[270,270],"number":1,"error":0},"propeller":true},"cockpit":{"section_segments":17,"offset":{"x":0,"y":10,"z":20},"position":{"x":[0,0,0,0,0,0,0,0],"y":[30,40,50,65,70,80,90],"z":[-7,-4.5,-6,-3.4,-6,-7,-12]},"width":[8,10,8,10,8,10,8],"height":[0,3,1,3,1,3,0],"texture":[17,63,17,63,17,63,17]},"innerWings":{"section_segments":7,"offset":{"x":50,"y":20,"z":0},"position":{"x":[-35,-35,-30,0,0,0,-5,-15,-35,-49,-49],"y":[-90,-110,-60,40,80,90,100,110,120,140,140],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,5,10,15,20,17,15,13,10,0],"height":[0,5,5,5,5,5,5,5,5,0],"texture":[17,2,3,4,3,3,2,2,17],"laser":{"damage":[20,20],"rate":2,"type":1,"speed":[240,240],"number":1,"error":0}},"outerWings":{"section_segments":12,"offset":{"x":72,"y":120,"z":0},"position":{"x":[-25,-25,-10,0,10,-13,-20],"y":[-150,-160,-120,-80,-20,20,45],"z":[0,0,0,0,0,0,0]},"width":[0,3,8,13,16,12,6],"height":[0,3,3,3,3,3,0],"angle":0,"laser":{"damage":[4,4],"rate":4,"type":1,"speed":[190,240],"number":3,"error":30},"propeller":true,"texture":[17,2,3,4,63,13]},"sideCannon":{"section_segments":6,"offset":{"x":76,"y":62,"z":3},"position":{"x":[0,0,0,0,0,0],"y":[-15,-20,-10,0,10,25],"z":[0,0,0,0,0,0]},"width":[0,3,4,4,3,0],"height":[0,3,4,4,3,0],"texture":[17,1,2,3,4,1],"angle":10,"laser":{"damage":[10,10],"rate":4,"type":1,"speed":[150,175],"number":1,"error":0}},"side_propulsors":{"section_segments":10,"offset":{"x":12,"y":50,"z":0},"position":{"x":[0,0,0,0,0,0,0],"y":[0,10,13,25,30,40,60,50],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,10,10,10,5,5,10,5,0],"height":[0,5,10,10,10,5,5,10,5,0],"propeller":true,"texture":[5,2,11,2,63,11,12]},"cores":{"section_segments":16,"offset":{"x":80,"y":3,"z":-100},"position":{"x":[0,0,0,0],"y":[0,-1,1,1],"z":[0,0,0,0]},"width":[0,12,12,0],"height":[0,12,12,0],"propeller":false,"texture":[11,11,17,11],"vertical":true},"a":{"section_segments":6,"offset":{"x":80,"y":100,"z":3},"position":{"x":[0,0,0,0,0,0],"y":[-1,-2,0,0,0,0],"z":[0,0,0,0,0,0]},"width":[0,2,2,3,2,0],"height":[0,2,2,3,2,0],"angle":0,"laser":{"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"error":0},"propeller":false,"texture":[4,4,4,4]},"b":{"section_segments":6,"offset":{"x":80,"y":100,"z":3},"position":{"x":[0,0,0,0,0,0],"y":[-1,-2,0,0,0,0],"z":[0,0,0,0,0,0]},"width":[0,2,2,3,2,0],"height":[0,2,2,3,2,0],"angle":30,"laser":{"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"error":0},"propeller":false,"texture":[4,4,4,4]},"c":{"section_segments":6,"offset":{"x":80,"y":100,"z":3},"position":{"x":[0,0,0,0,0,0],"y":[-1,-2,0,0,0,0],"z":[0,0,0,0,0,0]},"width":[0,2,2,3,2,0],"height":[0,2,2,3,2,0],"angle":60,"laser":{"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"error":0},"propeller":false,"texture":[4,4,4,4]},"d":{"section_segments":6,"offset":{"x":80,"y":100,"z":3},"position":{"x":[0,0,0,0,0,0],"y":[-1,-2,0,0,0,0],"z":[0,0,0,0,0,0]},"width":[0,2,2,3,2,0],"height":[0,2,2,3,2,0],"angle":90,"laser":{"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"error":0},"propeller":false,"texture":[4,4,4,4]},"e":{"section_segments":6,"offset":{"x":80,"y":100,"z":3},"position":{"x":[0,0,0,0,0,0],"y":[-1,-2,0,0,0,0],"z":[0,0,0,0,0,0]},"width":[0,2,2,3,2,0],"height":[0,2,2,3,2,0],"angle":120,"laser":{"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"error":0},"propeller":false,"texture":[4,4,4,4]},"f":{"section_segments":6,"offset":{"x":80,"y":100,"z":3},"position":{"x":[0,0,0,0,0,0],"y":[-1,-2,0,0,0,0],"z":[0,0,0,0,0,0]},"width":[0,2,2,3,2,0],"height":[0,2,2,3,2,0],"angle":150,"laser":{"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"error":0},"propeller":false,"texture":[4,4,4,4]},"g":{"section_segments":6,"offset":{"x":80,"y":100,"z":3},"position":{"x":[0,0,0,0,0,0],"y":[-1,-2,0,0,0,0],"z":[0,0,0,0,0,0]},"width":[0,2,2,3,2,0],"height":[0,2,2,3,2,0],"angle":180,"laser":{"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"error":0},"propeller":false,"texture":[4,4,4,4]},"h":{"section_segments":6,"offset":{"x":80,"y":100,"z":3},"position":{"x":[0,0,0,0,0,0],"y":[-1,-2,0,0,0,0],"z":[0,0,0,0,0,0]},"width":[0,2,2,3,2,0],"height":[0,2,2,3,2,0],"angle":210,"laser":{"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"error":0},"propeller":false,"texture":[4,4,4,4]},"i":{"section_segments":6,"offset":{"x":80,"y":100,"z":3},"position":{"x":[0,0,0,0,0,0],"y":[-1,-2,0,0,0,0],"z":[0,0,0,0,0,0]},"width":[0,2,2,3,2,0],"height":[0,2,2,3,2,0],"angle":240,"laser":{"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"error":0},"propeller":false,"texture":[4,4,4,4]},"j":{"section_segments":6,"offset":{"x":80,"y":100,"z":3},"position":{"x":[0,0,0,0,0,0],"y":[-1,-2,0,0,0,0],"z":[0,0,0,0,0,0]},"width":[0,2,2,3,2,0],"height":[0,2,2,3,2,0],"angle":270,"laser":{"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"error":0},"propeller":false,"texture":[4,4,4,4]},"k":{"section_segments":6,"offset":{"x":80,"y":100,"z":3},"position":{"x":[0,0,0,0,0,0],"y":[-1,-2,0,0,0,0],"z":[0,0,0,0,0,0]},"width":[0,2,2,3,2,0],"height":[0,2,2,3,2,0],"angle":300,"laser":{"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"error":0},"propeller":false,"texture":[4,4,4,4]},"l":{"section_segments":6,"offset":{"x":80,"y":100,"z":3},"position":{"x":[0,0,0,0,0,0],"y":[-1,-2,0,0,0,0],"z":[0,0,0,0,0,0]},"width":[0,2,2,3,2,0],"height":[0,2,2,3,2,0],"angle":330,"laser":{"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"error":0},"propeller":false,"texture":[4,4,4,4]}},"wings":{"winglet1":{"length":[30,10],"width":[30,20,20],"angle":[0,0],"position":[-50,-75,-85],"doubleside":true,"texture":63,"bump":{"position":12.8,"size":6},"offset":{"x":80,"y":160,"z":0}},"winglet2":{"length":[30,10],"width":[20,10,10],"angle":[0,0],"position":[-65,-80,-90],"doubleside":true,"texture":63,"bump":{"position":27,"size":6},"offset":{"x":68,"y":200,"z":0}},"winglet3":{"length":[30,10],"width":[15,10,10],"angle":[0,0],"position":[-62.5,-75,-83],"doubleside":true,"texture":63,"bump":{"position":-30,"size":4.9},"offset":{"x":54,"y":220,"z":0}},"bumperWing":{"length":[30,30],"width":[100,80],"angle":[0,0],"position":[110,200],"doubleside":true,"texture":62.6,"bump":{"position":0,"size":4},"offset":{"x":65,"y":-130,"z":0}},"connect1":{"length":[20,20],"width":[10,10],"angle":[0,0],"position":[0,-8],"texture":[17],"doubleside":true,"bump":{"position":30,"size":10},"offset":{"x":10,"y":25,"z":0}},"connect2":{"length":[20,20],"width":[10,10],"angle":[0,0],"position":[0,-8],"texture":[17],"doubleside":true,"bump":{"position":30,"size":10},"offset":{"x":12,"y":45,"z":0}},"connect3":{"length":[20,20],"width":[10,10],"angle":[0,0],"position":[0,-8],"texture":[17],"doubleside":true,"bump":{"position":30,"size":10},"offset":{"x":17,"y":65,"z":0}},"connect4":{"length":[20,20],"width":[10,10],"angle":[0,0],"position":[0,-3],"texture":[17],"doubleside":true,"bump":{"position":30,"size":10},"offset":{"x":15,"y":80,"z":0}},"connect5":{"length":[20,20],"width":[10,10],"angle":[0,0],"position":[0,1],"texture":[17],"doubleside":true,"bump":{"position":30,"size":10},"offset":{"x":14,"y":95,"z":0}},"connect6":{"length":[24,24],"width":[10,10],"angle":[0,0],"position":[0,4],"texture":[17],"doubleside":true,"bump":{"position":30,"size":10},"offset":{"x":11,"y":110,"z":0}}},"typespec":{"name":"Lancer","level":7.9,"model":8,"code":798,"specs":{"shield":{"capacity":[20000,20000],"reload":[2,2]},"generator":{"capacity":[1300,1300],"reload":[400,400]},"ship":{"mass":800,"speed":[90,90],"rotation":[30,30],"acceleration":[80,80]}},"shape":[0,6.413,6.452,5.3,4.339,3.738,6.687,6.443,6.102,5.888,5.785,5.84,5.999,6.298,6.699,7.142,9.58,10.294,10.273,11.087,11.943,12.034,12.243,12.144,10.704,11.2,10.704,12.144,12.243,12.034,11.943,11.087,10.273,10.294,9.58,7.142,6.699,6.298,6.02,5.84,5.785,5.888,6.102,6.443,6.687,3.738,4.339,5.3,6.452,6.413],"lasers":[{"x":0,"y":0.7,"z":0,"angle":0,"damage":[100,100],"rate":1,"type":2,"speed":[270,270],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.05,"y":-6.3,"z":0,"angle":0,"damage":[20,20],"rate":2,"type":1,"speed":[240,240],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.05,"y":-6.3,"z":0,"angle":0,"damage":[20,20],"rate":2,"type":1,"speed":[240,240],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.29,"y":-2.8,"z":0,"angle":0,"damage":[4,4],"rate":4,"type":1,"speed":[190,240],"number":3,"spread":0,"error":30,"recoil":0},{"x":-3.29,"y":-2.8,"z":0,"angle":0,"damage":[4,4],"rate":4,"type":1,"speed":[190,240],"number":3,"spread":0,"error":30,"recoil":0},{"x":5.077,"y":2.961,"z":0.21,"angle":10,"damage":[10,10],"rate":4,"type":1,"speed":[150,175],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.077,"y":2.961,"z":0.21,"angle":-10,"damage":[10,10],"rate":4,"type":1,"speed":[150,175],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.6,"y":6.86,"z":0.21,"angle":0,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.6,"y":6.86,"z":0.21,"angle":0,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.53,"y":6.879,"z":0.21,"angle":30,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.53,"y":6.879,"z":0.21,"angle":-30,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.479,"y":6.93,"z":0.21,"angle":60,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.479,"y":6.93,"z":0.21,"angle":-60,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.46,"y":7,"z":0.21,"angle":90,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.46,"y":7,"z":0.21,"angle":-90,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.479,"y":7.07,"z":0.21,"angle":120,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.479,"y":7.07,"z":0.21,"angle":-120,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.53,"y":7.121,"z":0.21,"angle":150,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.53,"y":7.121,"z":0.21,"angle":-150,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.6,"y":7.14,"z":0.21,"angle":180,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.6,"y":7.14,"z":0.21,"angle":-180,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.67,"y":7.121,"z":0.21,"angle":210,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.67,"y":7.121,"z":0.21,"angle":-210,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.721,"y":7.07,"z":0.21,"angle":240,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.721,"y":7.07,"z":0.21,"angle":-240,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.74,"y":7,"z":0.21,"angle":270,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.74,"y":7,"z":0.21,"angle":-270,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.721,"y":6.93,"z":0.21,"angle":300,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.721,"y":6.93,"z":0.21,"angle":-300,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.67,"y":6.879,"z":0.21,"angle":330,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.67,"y":6.879,"z":0.21,"angle":-330,"damage":[20,20],"rate":0.25,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":12.243}}';

const gameOptions = { 
  
  /*
  - Spawn is now located at a special point and you can only 
                    exit it, spawn is also surrounded but Objects with physics.\n
  */
  
  info: {
    name: "Juggernaut",
    version: "0.6",
    creator: "Thuliux",
    developer: "Megalodon",
    builders: "Megalodon, Basit, ShadowFighter191",
    "what's new": `- New Map/Vocabulary.\n
                  - Switch is now button improved and shows a pannel of ships
                    instead of one switch button.
    `,
  },
  
  ships: [
    A_Speedster_605,
    pulsor_Mk19_606,
    Preculsor_607,
    Contraband_608,
    NanoNemesis_609,
    Machete_610
  ],
  
  juggernauts: [
    Crystallid_799,
    Lancer_798
  ],
  
  defaultShip: [
    Fly_101
  ],
  
  teams: {
    0: { // "Juggernaut"
      hue: 90,
      hueName: "Green",
      ships: [799, 798]
    },
    1: { // "Hunters"
      hue: 0,
      hueName: "Red",
      ships: [608, 605, 606, 607, 609, 610]
    }
  },
  
  switch_button_duration: 10, // duration in seconds
  
  gameImages: {
    "circle": {
      image: "TheGreatMegalodon/Dueling-Component/main/Dueling_Component/Sans_titre-1.png",
      info: {
        size: 200,
        depth: -15
      }
    }
  },
  
  vocabulary: [
    { text: "You", icon:"\u004e", key:"O" },
    { text: "GG", icon:"\u00a3", key:"G" },
    { text: "Sorry", icon:"\u00a1", key:"S" },
    { text: "No Problem", icon:"\u0047", key:"P" },
    
    { text: "What?", icon:"\u004b", key:"Q" },
    { text: "Wait", icon:"\u0048", key:"T" },
    { text: "Yes", icon:"\u004c", key:"Y" },
    { text: "No", icon:"\u004d", key:"N" },
    
    { text: "Attack", icon:"\u00b4", key:"A" },
    { text: "Shield up", icon:"\u0063", key:"H" },
    { text: "Juggernaut", icon:"\u00bf", key:"J" },
    { text: "Powerup", icon:"\u00c0", key:"I" },
    
    { text: "Thanks", icon:"\u0041", key:"X" },
    { text: "Regroup", icon:"\u00bd", key:"F" },
    { text: "Me", icon:"\u004f", key:"E" },
    { text: "Spread out", icon:"\u00bc", key:"D" }
  ],
  
  map:
    "                                                                                                    \n"+
    "                                                                                                    \n"+
    "   9             5                                                                                  \n"+
    "  99      9                83                                                        44             \n"+
    " 99       99               74       6363477                      53            3     943            \n"+
    " 9    9    9                       789998854            7      3459            8     996            \n"+
    " 9         9                       4999999854                334999                   974           \n"+
    "                                         9994               569999                    995           \n"+
    "                       5                   99               47999                     995         8 \n"+
    "                                     88    99               8999                                  5 \n"+
    "    9      99                         4     9                     7                                 \n"+
    "           9                                                     87                                 \n"+
    "          99                                             85                                         \n"+
    "         99                                                                                         \n"+
    "     99 99                                                                                          \n"+
    "      999                                                                                           \n"+
    "                      99                                                                            \n"+
    " 99                   9                                                                             \n"+
    " 9999                                                                                               \n"+
    "                                                                                            686     \n"+
    "                                                                                      8      45     \n"+
    "                                                          7                           8             \n"+
    "                                                                                      4             \n"+
    "                                           5                        999                             \n"+
    "                                  99       685                     99999                            \n"+
    "                9999              9999      566                   999 999                           \n"+
    "              99999                                                                                 \n"+
    "                        7                                                                           \n"+
    "                                                                                                    \n"+
    "                                                                                                    \n"+
    "                                                                     9                              \n"+
    "                                                                 9         99                       \n"+
    "                                       7          56             99       999                       \n"+
    "                                                 7856             99      999                       \n"+
    "            8                       5                          7  999     99                        \n"+
    "       8                4                                          999   999              98        \n"+
    "            8                                                           999           65  997       \n"+
    "           9                                                                         579  95        \n"+
    "                                                                                    3899            \n"+
    "                                                                                  35599             \n"+
    "                                                                                  7999              \n"+
    "                               9                                    4                               \n"+
    "            388664886           9                                  74                               \n"+
    "           489999999                           9    53837                                           \n"+
    "          3799999                                  399994477                                        \n"+
    "         3599                                        99999933               6                       \n"+
    "        6399                                              995                                       \n"+
    "        399                                                93                         884           \n"+
    "        39                                                  5                         787           \n"+
    "        59                  84                                                        6             \n"+
    "                            57           9                                                          \n"+
    "                             5                                                                      \n"+
    "                                                 5 35                                               \n"+
    "            5                                                                                       \n"+
    "                      7                                                                             \n"+
    "                                                                                                    \n"+
    "              3                                                                             86      \n"+
    "                                                                         99              73 67      \n"+
    "                         6                                                9999            547       \n"+
    "                                                                             9                      \n"+
    "     4              3         5                                                                     \n"+
    "    546                                         53538       3                                       \n"+
    "    5745          9                         76766999       88                                       \n"+
    "                 99                       366999999        6    7                                   \n"+
    "                 99                      8599999                                                    \n"+
    "                 9                                                             9995                 \n"+
    "                99                                                           999855                 \n"+
    "                                                                            99555                   \n"+
    "             99                                                            9984                     \n"+
    "            99                                                           99953             47       \n"+
    "            9                      99                                   45757            584        \n"+
    "                                  99                                                   46763        \n"+
    "   7                             99        99                                          4            \n"+
    "                                 9          9                                                       \n"+
    "                                    9       99                                                      \n"+
    "                                             9                                                      \n"+
    "         45                  7                                                        568           \n"+
    "        539                              9                   57                          7843       \n"+
    "        699    945               9                            765                           865     \n"+
    "        3999   993               99                             7    8                         348  \n"+
    "        3899999966               999                                 5577                        66 \n"+
    "         87789937                  999                               7876                           \n"+
    "    7       7846                     9                                 588                          \n"+
    "    4                                                                                               \n"+
    "                        3                                                                           \n"+
    "                                                                                                    \n"+
    "                                                                                                    \n"+
    "                                            999999999999                                            \n"+
    "               58                           9          9                                            \n"+
    "                                            9          9                                            \n"+
    "                                            9          9                                       6    \n"+
    "                                            9          9                           3545       88    \n"+
    "   589                                      9          9                        748799       83     \n"+
    "   35999                                    9          9                       5499999       83     \n"+
    "    63999 99993                             999999999999                       4999          6      \n"+
    "     3739999765          687                                                                        \n"+
    "       646676         4553                                                                          \n"+
    "                     54                                                                             \n"+
    "                                                                                                    \n"+
    "                                                                                                    ",
};

const gameCommands = {
  setJugg: {
    usage: "setJugg <ID>|<random> <type>",
    description: "Used to Choose a new Juggernaut:\n<ID> Choose a specific player\n<random> Choose a random player\n<type> choose a specific juggernaut ship to use",
    action: function(type, ship) {
      let player;
      switch(typeof(type)) {
        default: player = functions.usage.random(game.ships.filter(ship => !ship.custom.isJuggernaut)); break;
        case "number": player = game.findShip(type); break;
      }
      functions.usage.selectJuggernaut(player, ship);
      gameCommands.log("Now is the juggernaut!", "green", player);
    }
  },
  info: {
    usage: "info <commands>|<players>",
    description: "Allows you to see all of the informations about:\n<commands> Shows every commands on the mod\n<players> Shows the player list\n",
    action: function(type) {
      switch(type) {
        default: gameCommands.log(`Wrong Input`, "red"); break;
        case "commands":
          const commandDescriptions = Object.keys(gameCommands)
            .filter(command => ![ 'findColor', 'log', 'getArguments', 'resolveCommands' ].includes(command))
            .map(command => { 
              const { usage, description } = gameCommands[command];
              return `[[guib;#85ff70;]Command:] [[g;Gold;]${usage}] \n[[i;#70dcff;]${description}]`;
            }).join("\n");
          game.modding.terminal.echo(`${commandDescriptions}`);
          break;
        case "players":
          const playerList = {
            jugg: game.ships.filter(ship => ship.custom.isJuggernaut)
              .map(ship => `[[i;#70dcff;]ID:] [[g;Gold;]${ship.id}][[i;#70dcff;], Name:] [[g;Gold;]${ship.name.replace(/[\[\]]/g, '|')}]`)
              .join("\n"),
            play: game.ships.filter(ship => !ship.custom.isJuggernaut)
              .map(ship => `[[i;#70dcff;]ID:] [[g;Gold;]${ship.id}][[i;#70dcff;], Name:] [[g;Gold;]${ship.name.replace(/[\[\]]/g, '|')}]`)
              .join("\n"),
          };
          game.modding.terminal.echo(`[[g;#85ff70;]Amount of players:] [[gb;#fffc70;]${game.ships.length}]\n`);
          game.modding.terminal.echo(`[[gu;#70aeff;]Juggernaut][[g;#70aeff;]:] \n${playerList.jugg||"[[g;#70aeff;]None]"}\n`);
          game.modding.terminal.echo(`[[gu;#70aeff;]Players][[g;#70aeff;]:] \n${playerList.play||"[[g;#70aeff;]None]"}\n`);
          break;
      }
    }
  },
  findColor: function(color) { // do colors
    switch(color) {
      case "none": return;
      case "green": return "#70ffc1";
      case "red": return "#ff7070";
      case "orange": return "#ffb670";
      case "lightblue": return "#70dcff";
      case "yellow": return "#fff870";
      default: return "#ffffff";
    }
  },
  log: function(action, color, ship) { // simply to write stuff in the console
    const newColor = gameCommands.findColor(color);
    const player = ship ? `[[g;${newColor};]Player:] [[g;Gold;]${ship.name}][[g;${newColor};], ID:] [[g;Gold;]${ship.id}][[g;${newColor};], ` : "";
    game.modding.terminal.echo(`${player}[[g;${newColor};]${action}]\n`);
  },
  getArguments: function (cmd) { // do the actual stuff for the cpmmands
    cmd = cmd.trim();
    let args = [];
    if (cmd.length < 1) return args;
    let separator = `"'`.includes(cmd[0]) ? cmd[0] : ' ';
    let i = separator == ' ' ? 0 : 1;
    for (; i < cmd.length; ++i) {
      let index = i;
      while (index < cmd.length && (cmd[index] != separator || (cmd.slice(i, index).match(/\\+$/) || [''])[0].length % 2)) ++index;
      let lit = separator == ' ' ? '"' : separator;
      let value = eval(lit + cmd.slice(i, index) + lit);
      if (!isNaN(value)) value = +value;
      args.push(value);
      ++index;
      while (index < cmd.length) {
        if (cmd[index] == ' ') {
          ++index;
          continue;
        }
        if ((cmd[index] == '"' || cmd[index] == "'") && !((cmd.slice(i, index).match(/\\+$/) || [''])[0].length % 2)) {
          separator = cmd[index];
          break;
        }
        separator = ' ';
        --index;
        break;
      }
      i = index;
    }
    return args;
  },
  resolveCommands: function () { // resolve commands 
    for (let i in gameCommands) {
      if (i == 'getPlayerName' || i == `findAvailableID` || i == `getArguments` || i == `log` || i == `resolveCommands`) continue;
      game.modding.commands[i] = function (req) {
        return gameCommands[i].action(...this.getArguments(req.replace(i + " ", "")));
      }.bind(this);
    }
  }
};

var functions = {
  usage: {
    random: function(list) { // returns a random object of a list
      return list[Math.floor(Math.random() * list.length)];
    },
    findPlayersSides: function() { // returns in 0 the juggernaut and in 1 the rest of the players
      const list = game.ships;
      return [list.filter(ship => ship.custom.isJuggernaut), list.filter(ship => !ship.custom.isJuggernaut)];
    },
    setShip: function(team, ship, type, coords = {x: undefined, y: undefined}) {
      ship.set({
        team: team,
        hue: gameOptions.teams[team].hue,
        type: type,
        shield: 999999,
        crystals: team === 1 ? 720:1280,
        stats: 88888888,
        x: coords.x,
        y: coords.y
      });
    },
    selectJuggernaut: function(ship, type=false) { // function to do the juggernaut change | no jugg => first set | yes jugg => switch between old and new
      const sides = this.findPlayersSides();
      const newJugg = ship;
      const oldJugg = sides[0][0];
      if (sides[0].length === 0) {
        newJugg.custom.isJuggernaut = true;
        this.setShip(0, newJugg, type?type:this.random(gameOptions.teams[0].ships), {x:0, y:0});
        functions.buttons._switch.toggle(newJugg, false);
      } else {
        oldJugg.custom.isJuggernaut = false;
        this.setShip(1, oldJugg, this.random(gameOptions.teams[1].ships), {x:0, y:-410});
        functions.buttons._switch.toggle(oldJugg, true);
        // switch
        newJugg.custom.isJuggernaut = true;
        this.setShip(0, newJugg, type?type:this.random(gameOptions.teams[0].ships), {x:0, y:0});
        functions.buttons._switch.toggle(newJugg, false);
      }
      if (game.custom.initialized === false) {
        game.custom.initialized = true;
      }
    },
    spawn: function(ship) { // manage spawn
      functions.buttons._switch.toggle(ship, true);
      if (ship.custom.initialized) {
        this.setShip(1, ship.type, this.random(gameOptions.teams[1].ships), {x:0, y:-410});
        return;
      }
      this.setShip(1, ship, this.random(gameOptions.teams[1].ships), {x:0, y:-410});
      ship.custom.isJuggernaut = false;
      ship.custom.initialized = true;
    },
    outOfSpawn: function(ship) {
      this.setShip(1, ship, ship.type, {x:0, y:-380});
    }
  },
  buttons: {
    _switch: {
      shipsInfo: {},
      toggle: function(ship, visible) {
        const list = this.shipsInfo;
        list.forEach((value, index) => {
          ship.setUIComponent({
            id: `_switch|${value.name}`,
            position: visible ? this.nextPos(index) : [0,0,0,0],
            clickable: true,
            visible: visible,
            components: [
              {type: "box", position: [0, 0, 100, 100], fill: "rgb(68, 85, 102)", stroke: "rgba(204, 221, 238, 0.8)", width: 4},
              {type: "text", position: [5, 10, 90, 80], align: "center", value: value.name, color: "rgba(204, 221, 238, 1)"},
            ]
          });
        });
      },
      nextPos: function(index) {
        if (index < 5) {return [15+(11*index), 72, 10, 6]} 
        else {return [15+(11*(index-5)), 80, 10, 6]}
      },
      action: function(ship, name) {
        const type = this.shipsInfo.filter(val => val.name == name)[0].typespec.code;
        const maxCrystals = 20 * Math.trunc(type / 100) * Math.trunc(type / 100);
        const maxStats = Math.trunc(type / 100) < 7 ? 11111111 * Math.trunc(type / 100) : 0;
        ship.set({
          type: type,
          crystals: maxCrystals,
          stats: maxStats, 
          shield: 999, vx: 0, vy: 0
        });
      }
    }
  },
  /*abilities: {
    buttons: {
      pull: {
        info: {
          shortcut: "J",
          cooldown: 45
        },
        UIs: {
          def: {},
          reload: {}
        },
        action: function(ship) {
          
        }
      }
    },
    prepareUIs: function() {
      Object.entries(functions.abilities).forEach(([entry, ability], index) => {
        ability.gameUIs.def = {
          id: ability.info.name.toLowerCase(), 
          position: ability.info.position, 
          clickable: true, 
          shortcut: ability.info.shortcut, 
          visible: true,
          components: [
            { type: "box", position: [0, 0, 100, 100], fill: "rgba(135, 0, 255, 0.35)", stroke: "rgba(135, 0, 255, 0.85)", width: 8 },
            { type: "text", position: [0, 10, 100, 40], value: `[${ability.info.shortcut}]`, color: "#CDE", align: "center" },
            { type: "text", position: [0, 50, 100, 40], value: ability.info.name, color: "#CDE", align: "center" }
          ]
        };
        ability.gameUIs.reload = {
          id: ability.info.name.toLowerCase(), 
          position: ability.info.position, 
          clickable: false, 
          visible: true,
          components: [
            { type: "box", position: [0, 0, 100, 100], fill: "rgba(255, 0, 0, 0.35)", stroke: "rgba(255, 0, 0, 0.85)", width: 8 },
            { type: "text", position: [0, 10, 100, 45], value: "", color: "#CDE", align: "center" },
            { type: "text", position: [0, 50, 100, 40], value: ability.info.name, color: "#CDE", align: "center" }
          ]
        };
      });
    },
    activate: function(id, ship) {
      ship.setUIComponent(gameFunctions.Abilities[id].gameUIs.reload);
      gameFunctions.Abilities[id].action(ship);
      ship.custom[id] = gameFunctions.Abilities[id].info.cooldown+1;
    },
    coolDown: function(ship) {
      Object.entries(gameFunctions.Abilities).forEach(([abilityId, ability]) => {
        if (ship.custom[abilityId] > 1) {
          ship.custom[abilityId]--;
          ability.gameUIs.reload.components[1].value = ship.custom[abilityId];
          ship.setUIComponent(ability.gameUIs.reload);
        } else if (ship.custom[abilityId] !== null) {
          ability.gameUIs.reload.components[1].value = ability.info.cooldown;
          ship.setUIComponent(ability.gameUIs.def);
          ship.custom[abilityId] = null;
        }
      });
    }
  },*/
  manage: function(game) { // js tick loop                    (HIGHLY UNOPTIMIZED TODO)
    if (game.step % 60 === 0) {
      try {
        this.updateScoreboard(game);
        game.ships.filter(ship => ship.custom.isJuggernaut === false)
        .forEach(ship => { // loop for players
          this.healthBar.updateUI(ship, true);
          //more code
        });
        game.ships.filter(ship => ship.custom.isJuggernaut === true)
        .forEach(ship => { // loop for juggernaut
          this.healthBar.updateUI(ship, false);
          // more code
        });
      } catch(e) {
        if (game.custom.initialized === true) {
          const newJugg = functions.usage.random(game.ships.filter(ship => ship.custom.isJuggernaut === false));
          functions.usage.selectJuggernaut(newJugg);
        }
      }
    }
  },
  healthBar: { // Jugg health bar
    finder: function(type) { // allows to find what ship the juggernaut has
      return gameOptions.juggernauts.map(str => JSON.parse(str)).filter(el => el.typespec.code === type)[0];
    },
    updateUI: function(ship, visible) { // UI component for the health bar in game
      let jug = game.ships.filter(el => el.custom.isJuggernaut === true)[0]; // finds who is juggernaut
      ship.setUIComponent({
        id: "Frame_1",
        position: visible ? [24, 4, 53, 6] : [0,0,0,0],
        clickable: false,
        visible: visible,
        components: [
          {type: "box", position: [0, 10, 100, 78], stroke: "#cf3131", width: 2},
          {type: "box", position: [0, 10, ((jug.shield/this.finder(jug.type).specs.shield.capacity[1]) * 100), 78], fill: "#cf3131"},
          {type: "text", position: [0, 21.77, 100, 54.55], align: "center", value: `Juggernaut [${this.finder(jug.type).typespec.name}]`, color: "#ffffff"},
        ]
      });
    }
  },
  findColor: function(ship) {
    switch (true) {
      case !ship.alive: return "rgba(100, 100, 100, 0.8)";
      case ship.custom.isJuggernaut: return "rgba(0, 185, 255, 0.8)";
      default: return "rgba(255, 255, 255, 0.8)";
    }
  },
  updateScoreboard: function(game) {
    const sortedShips = {
      juggernaut: this.usage.findPlayersSides()[0],
      players: this.usage.findPlayersSides()[1].sort((a, b) => b.score - a.score)
    };
    const Scoreboard = {
      id: "scoreboard",
      clickable: false,
      visible: true,
      components: [
        { type: "box", position: [0, 0, 100, 9.75], fill: "RGBA(54, 241, 8, 0.35)" },
        { type: "text", position: [3, 0.75, 69, 8], value: "Juggernaut", color: "rgba(255,255,255,0.8)", align: "left" },
        
        ...sortedShips.juggernaut.map((ship, i) => [ // takes all of the juggs and displays them
          { type: "text", position: [0, 0, 77, 7.5], value: "" },
          { type: "player", index: i, position: [0, 10 * i + 11, 77, 8.5], id: ship.id, color: this.findColor(ship), value: "", align: "left" },
          { type: "text", position: [68, 10 * i + 11.75, 30, 7.5], value: ship.score, color: this.findColor(ship), align: "right" }
        ]).flat(Infinity),
        
        { type: "box", position: [0, 10 * sortedShips.juggernaut.length + 10.5, 100, 9.75], fill: "RGBA(241, 13, 13, 0.35)" },
        { type: "text", position: [3, 10 * sortedShips.juggernaut.length + 11.25, 69, 8], value: "Players", color: "rgba(255,255,255,0.8)", align: "left" },
        
        ...sortedShips.players.map((ship, i) => [ // takes all of the players and displays them
          { type: "text", position: [0, 0, 77, 7.5], value: "" },
          { type: "player", index: i, position: [0, 10 * (i+sortedShips.juggernaut.length) + 21.5, 77, 8.5], id: ship.id, color: this.findColor(ship), value: "", align: "left" },
          { type: "text", position: [68, 10 * (i+sortedShips.juggernaut.length) + 22, 30, 7.5], value: ship.score, color: this.findColor(ship), align: "right" }
        ]).flat(Infinity)
      ]
    };
    for (let ship of game.ships) {
      if (ship === null) continue;
      let components = [...Scoreboard.components];
      let index = components.findIndex(c => c.type == "player" && c.id === ship.id);
      if (index == -1) {
        let last = Scoreboard.components.at(-1);
        last.id = ship.id;
        last.color = this.findColor(ship); 
        Scoreboard.components.at(-1).value = ship.score;
        index = Scoreboard.components.length - 1;
      }
      const pos = (ship.team === 0) ? 
      [0, 10 * components[index].index + 10.1, 100, 10] : 
      [0, 10 * (components[index].index + sortedShips.juggernaut.length) + 20.75, 100, 10];
      Scoreboard.components.splice(index, 0, {type: "box",position: pos, fill: "rgba(200, 200, 255, 0.125)"});
      ship.setUIComponent(Scoreboard);
      Scoreboard.components = components;
    }
  }
};

setTimeout(() => {game.custom.started||prepareGame()}, 200);

this.options = {
  root_mode: "",
  map_name: `${gameOptions.info.name} - Beta v${gameOptions.info.version}`,
  ships: [gameOptions.ships, gameOptions.juggernauts, gameOptions.defaultShip].flat(Infinity),
  vocabulary: gameOptions.vocabulary,
  custom_map: gameOptions.map,
  friendly_colors: Object.keys(gameOptions.teams).length,
  reset_tree: true,
  max_players: 60,
  map_size: 100,
  weapons_store: false,
  crystal_value: 0,
  asteroids_strength: 100,
  starting_ship: 800, //infinite lives
  speed_mod: 1.2,
};

this.tick = function(game) {
  functions.manage(game);
};

this.event = function(event, game) {
  switch (event.name) {
    case "ui_component_clicked":
      if (event.id.includes("_")) {
        functions.buttons[event.id.split("|")[0]].action(event.ship, event.id.split("|")[1]);
      } else {
        functions.abilities[event.id].action(event.ship);
      }
      break;
    case "ship_spawned":
      functions.usage.spawn(event.ship);
      break;
    case "ship_destroyed":
      if (event.ship.custom.isJuggernaut === true) {
        functions.usage.selectJuggernaut(event.killer);
      }
      break;
  }
};

function prepareGame() {
  const { echo } = game.modding.terminal;
  const maxLength = Math.max(...Object.keys(gameOptions.info).map(key => key.length));
  echo(`\n[[i;#ff7070;]  Staring % Initializing...]\n`);
  Object.keys(gameOptions.info).forEach((key, index) => {
    const formattedKey = `${key.charAt(0).toUpperCase() + key.substring(1)}:`.padEnd(maxLength + 2);
    echo(`[[i;${key=="what's new"?"Gold":"Cyan"};]     ${formattedKey}] [[i;${key=="what's new"?"Tomato":"Gold"};]${gameOptions.info[key]}]`);
    (index === 1 || index === 4) && echo(' ');
  });
  echo(`\n[[i;#ffb670;]  Procecutive Order % Starting]`);
  gameCommands.resolveCommands();
  functions.buttons._switch.shipsInfo = gameOptions.ships.map(str => {
    const jsedStr = JSON.parse(str);
    return jsedStr;
  });
  echo(`[[i;#85ff70;]  Started % Log-enabled\n`);
  game.custom.started = true;
  game.custom.initialized = false;
  setTimeout(() => echo(`\n[[ig;#85ff70;]Write] [[g;Gold;]<info commands>] [[ig;#85ff70;]in the console]\n[[ig;Cyan;]For more information on the mod and its integrated commands.]\n`), 2000);
}

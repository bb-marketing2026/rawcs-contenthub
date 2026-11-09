// November 2026 pubmats, draft 2 (supplied 30 Oct, r1133). Also replaces the RACG carousel art (rcg1-5).
// Each key maps to an image file in assets/final/.
window.RAWCS_ART_NOV = {
  "nv01": "assets/final/nv01.jpg",
  "nv01b": "assets/final/nv01b.jpg",
  "nv01c": "assets/final/nv01c.jpg",
  "nv02": "assets/final/nv02.jpg",
  "nv02b": "assets/final/nv02b.jpg",
  "nv03": "assets/final/nv03.jpg",
  "nv04": "assets/final/nv04.jpg",
  "nv05": "assets/final/nv05.jpg",
  "nv06": "assets/final/nv06.jpg",
  "nv07": "assets/final/nv07.jpg",
  "nv07b": "assets/final/nv07b.jpg",
  "nv08": "assets/final/nv08.jpg",
  "nv09": "assets/final/nv09.jpg",
  "nv11": "assets/final/nv11.jpg",
  "nv12": "assets/final/nv12.jpg",
  "nv13": "assets/final/nv13.jpg",
  "nv13b": "assets/final/nv13b.jpg",
  "nv14": "assets/final/nv14.jpg",
  "rcg1": "assets/final/rcg1.jpg",
  "rcg2": "assets/final/rcg2.jpg",
  "rcg3": "assets/final/rcg3.jpg",
  "rcg4": "assets/final/rcg4.jpg",
  "rcg5": "assets/final/rcg5.jpg"
};
// November art overrides the earlier map (rcg1-5 were replaced), whichever loads first.
if (window.RAWCS_ART) Object.assign(window.RAWCS_ART, window.RAWCS_ART_NOV);

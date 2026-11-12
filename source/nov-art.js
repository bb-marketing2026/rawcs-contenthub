// November 2026 pubmats, draft 2 (supplied 30 Oct, r1133). Also replaces the RACG carousel art (rcg1-5).
// 11 Nov 2026 (r-art11): *c / nv01d keys carry the copy-doc text edits and the larger Rotary/RAWCS lockup.
// 11 Nov 2026 (r-l15): logos at 1.5x on every pubmat; the current keys point to the -l15 files.
// Each key maps to an image file in assets/final/.
window.RAWCS_ART_NOV = {
  "nv01": "assets/final/nv01.jpg",
  "nv01b": "assets/final/nv01b.jpg",
  "nv01c": "assets/final/nv01c.jpg",
  "nv02": "assets/final/nv02.jpg",
  "nv02b": "assets/final/nv02-l15.jpg",
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
  "rcg5": "assets/final/rcg5.jpg",
  "nv01d": "assets/final/nv01-l15.jpg",
  "nv03c": "assets/final/nv03-l15.jpg",
  "nv04c": "assets/final/nv04-l15.jpg",
  "nv05c": "assets/final/nv05-l15.jpg",
  "nv06c": "assets/final/nv06-l15.jpg",
  "nv07c": "assets/final/nv07-l15.jpg",
  "nv08c": "assets/final/nv08-l15.jpg",
  "nv09c": "assets/final/nv09-l15.jpg",
  "nv11c": "assets/final/nv11-l15.jpg",
  "nv12c": "assets/final/nv12-l15.jpg",
  "nv13c": "assets/final/nv13-l15.jpg",
  "nv14c": "assets/final/nv14-l15.jpg",
  "rcg1c": "assets/final/rcg1-l15.jpg",
  "rcg2c": "assets/final/rcg2-l15.jpg",
  "rcg3c": "assets/final/rcg3-l15.jpg",
  "rcg4c": "assets/final/rcg4-l15.jpg",
  "rcg5c": "assets/final/rcg5-l15.jpg"
};
// November art overrides the earlier map (rcg1-5 were replaced), whichever loads first.
if (window.RAWCS_ART) Object.assign(window.RAWCS_ART, window.RAWCS_ART_NOV);

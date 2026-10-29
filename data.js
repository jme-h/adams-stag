// Edit this file to change the plan. Times are UK local (GMT that weekend, clocks go back 25 Oct).
// end: null = a moment (arrive, check in), "late" = whenever. place: null = undecided.
// note: shown when the item is opened, highlighted if there's a venue (plain: true to skip the highlight). tbc: replaces "Venue TBC, decide on the night".
// leg: "from>to" key in ROUTES, drawn on the map and shown as walking time.

const TRIP = {
  title: "Adam's Stag",
  city: "Manchester",
  tz: "Europe/London",
};

const PLACES = {
  piccadilly: { name: "Manchester Piccadilly", address: "Piccadilly Station, Manchester M1 2QF", lat: 53.47742, lng: -2.23083, emoji: "🚆" },
  hotel:      { name: "Holiday Inn Manchester City Centre", address: "25 Aytoun Street, Manchester M1 3DT", lat: 53.47889, lng: -2.23421, emoji: "🛏️" },
  northernmonk: { name: "Northern Monk Refectory", address: "10 Tariff Street, Manchester M1 2FF", lat: 53.48121, lng: -2.23222, emoji: "🍺" },
  koffee:     { name: "The Koffee Pot", address: "84-86 Oldham Street, Manchester M4 1LE", lat: 53.48414, lng: -2.23325, emoji: "🍳" },
  meetspace:  { name: "Meetspace VR", address: "Unit 4, Millow Street, Manchester M4 4DR", lat: 53.48892, lng: -2.23937, emoji: "🥽" },
  marble:     { name: "Marble Arch Inn", address: "73 Rochdale Road, Manchester M4 4HY", lat: 53.48821, lng: -2.23234, emoji: "🍻" },
  quiz:       { name: "Quiz Room Manchester", address: "3 St Ann's Alley, Manchester M2 6AJ", lat: 53.48133, lng: -2.24524, emoji: "🧠" },
  bundobust:  { name: "Bundobust Brewery", address: "61-69 Oxford Street, Manchester M1 6EQ", lat: 53.47543, lng: -2.24160, emoji: "🍛" },
  bcd:        { name: "Behind Closed Doors (Penthouse Karaoke)", address: "93 Oldham Street, Manchester M4 1LW", lat: 53.48360, lng: -2.23442, emoji: "🎤" },
};

const EVENTS = [
  { start: "2026-10-30T15:45", end: null,               title: "Arrive",            place: "piccadilly" },
  { start: "2026-10-30T16:00", end: null,               title: "Check in",          place: "hotel",      leg: "piccadilly>hotel" },
  { start: "2026-10-30T17:00", end: "late",               title: "Drinking",          place: "northernmonk", leg: "hotel>northernmonk", note: "We'll see where the night takes us.", plain: true },

  { start: "2026-10-31T10:00", end: "2026-10-31T11:30", title: "Brunch",            place: "koffee",     leg: "hotel>koffee" },
  { start: "2026-10-31T12:30", end: "2026-10-31T14:00", title: "VR",                place: "meetspace",  leg: "koffee>meetspace" },
  { start: "2026-10-31T14:00", end: "2026-10-31T16:30", title: "Drinking / chilling", place: "marble",   leg: "meetspace>marble" },
  { start: "2026-10-31T17:00", end: "2026-10-31T18:00", title: "Quiz",              place: "quiz",       leg: "marble>quiz" },
  { start: "2026-10-31T18:00", end: "2026-10-31T19:00", title: "Drinking / chilling", place: null, tbc: "Venue TBC, decide on the evening", note: "Quick pitstop before dinner." },
  { start: "2026-10-31T19:00", end: "2026-10-31T20:30", title: "Dinner",            place: "bundobust",  leg: "quiz>bundobust" },
  { start: "2026-10-31T21:00", end: "2026-11-01T00:00", title: "Karaoke",           place: "bcd",        leg: "bundobust>bcd", note: "⚠️ This is for Martin's birthday, not Adam's Stag" },

  { start: "2026-11-01T00:00", end: "late",               title: "Drinking",          place: null,         leg: "bcd>hotel", legLabel: "The walk home, eventually", note: "We'll see where the night takes us." },
  { start: "2026-11-01T11:00", end: null,               title: "Check out",         place: "hotel" },
  { start: "2026-11-01T11:00", end: "2026-11-01T13:35", title: "Brunch",            place: null, tbc: "Venue TBC, decide in the morning", note: "Whoever's still standing. Spoons is always an option." },
  { start: "2026-11-01T13:35", end: null,               title: "Depart",            place: "piccadilly", leg: "hotel>piccadilly" },
];

// Pre-computed with OSRM (OpenStreetMap). m = metres, s = seconds, mode = walk.
const ROUTES = {"piccadilly>hotel":{"m":326,"s":261,"path":[[53.47741,-2.23079],[53.47757,-2.23069],[53.4779,-2.23165],[53.47798,-2.23181],[53.47803,-2.23198],[53.47827,-2.23319],[53.47844,-2.23331],[53.47835,-2.23368],[53.4785,-2.23386],[53.47854,-2.23383],[53.4786,-2.23398],[53.47887,-2.23427],[53.47888,-2.23424]],"mode":"walk"},"hotel>northernmonk":{"m":421,"s":339,"path":[[53.47888,-2.23424],[53.47939,-2.23493],[53.47943,-2.23498],[53.47972,-2.2344],[53.47982,-2.2342],[53.47986,-2.2341],[53.47993,-2.23395],[53.48,-2.23379],[53.47995,-2.23374],[53.47998,-2.23366],[53.48005,-2.2335],[53.48018,-2.23307],[53.4802,-2.233],[53.48033,-2.23256],[53.48065,-2.23276],[53.48071,-2.23269],[53.48085,-2.23279],[53.48104,-2.23295],[53.48125,-2.23225]],"mode":"walk"},"hotel>koffee":{"m":802,"s":644,"path":[[53.47888,-2.23424],[53.47983,-2.23551],[53.48023,-2.23622],[53.48068,-2.23563],[53.48091,-2.23606],[53.4811,-2.23566],[53.48118,-2.23564],[53.4819,-2.23463],[53.48197,-2.23477],[53.48207,-2.23465],[53.48228,-2.23502],[53.4836,-2.23326],[53.48388,-2.23372],[53.48417,-2.23331]],"mode":"walk"},"koffee>meetspace":{"m":852,"s":682,"path":[[53.48417,-2.23331],[53.48454,-2.23278],[53.4846,-2.2329],[53.48466,-2.23286],[53.48477,-2.23308],[53.48485,-2.23296],[53.48494,-2.23297],[53.48495,-2.23312],[53.48524,-2.23372],[53.48624,-2.23561],[53.48632,-2.23559],[53.48642,-2.23577],[53.48646,-2.23571],[53.48655,-2.2359],[53.48689,-2.23525],[53.48693,-2.23528],[53.4883,-2.2369],[53.48851,-2.23754],[53.48865,-2.23754],[53.48879,-2.23881],[53.48872,-2.23909],[53.48878,-2.23921],[53.48896,-2.2393],[53.48892,-2.23937]],"mode":"walk"},"meetspace>marble":{"m":596,"s":477,"path":[[53.48892,-2.23937],[53.48896,-2.2393],[53.48878,-2.23921],[53.48874,-2.23917],[53.48872,-2.23909],[53.48879,-2.23881],[53.48868,-2.23794],[53.48869,-2.23779],[53.48858,-2.23726],[53.4886,-2.23719],[53.48857,-2.23698],[53.48866,-2.23681],[53.48866,-2.23632],[53.48869,-2.23596],[53.48867,-2.23594],[53.48875,-2.23571],[53.48878,-2.23548],[53.48892,-2.23522],[53.48868,-2.23485],[53.48897,-2.23418],[53.488,-2.23295],[53.48804,-2.23285],[53.48801,-2.23278],[53.48817,-2.23236],[53.4882,-2.23237]],"mode":"walk"},"marble>quiz":{"m":1358,"s":1086,"path":[[53.4882,-2.23237],[53.48803,-2.23273],[53.48792,-2.2326],[53.48776,-2.23297],[53.48771,-2.23296],[53.48709,-2.23437],[53.4869,-2.23452],[53.4869,-2.23465],[53.48681,-2.23487],[53.48617,-2.23584],[53.48609,-2.23586],[53.48564,-2.23696],[53.48476,-2.23862],[53.48457,-2.23934],[53.48446,-2.24026],[53.48432,-2.24022],[53.48389,-2.24046],[53.48413,-2.24165],[53.48402,-2.24208],[53.48397,-2.24212],[53.48408,-2.24271],[53.48405,-2.24294],[53.48301,-2.24372],[53.48298,-2.2436],[53.48174,-2.24449],[53.48117,-2.24469],[53.48119,-2.24487],[53.48131,-2.24484],[53.48136,-2.24524]],"mode":"walk"},"quiz>bundobust":{"m":912,"s":730,"path":[[53.48136,-2.24524],[53.48131,-2.24484],[53.48101,-2.24494],[53.48099,-2.24476],[53.48024,-2.24505],[53.48013,-2.24501],[53.47988,-2.24428],[53.47927,-2.24332],[53.47874,-2.24229],[53.47867,-2.24243],[53.47859,-2.24227],[53.47769,-2.24352],[53.4774,-2.24377],[53.47711,-2.24333],[53.47619,-2.24237],[53.47631,-2.24203],[53.47628,-2.24198],[53.47611,-2.24223],[53.47541,-2.24166]],"mode":"walk"},"bundobust>bcd":{"m":1201,"s":961,"path":[[53.47541,-2.24166],[53.47609,-2.24222],[53.47628,-2.24198],[53.4763,-2.24205],[53.47755,-2.23995],[53.4781,-2.2389],[53.47877,-2.23798],[53.47966,-2.23655],[53.4799,-2.23679],[53.48041,-2.23776],[53.48074,-2.23727],[53.48084,-2.23747],[53.48191,-2.23668],[53.48357,-2.23435]],"mode":"walk"},"bcd>hotel":{"m":720,"s":576,"path":[[53.48357,-2.23435],[53.48191,-2.23668],[53.48084,-2.23747],[53.48046,-2.23672],[53.48035,-2.23689],[53.48011,-2.23641],[53.48016,-2.23629],[53.48001,-2.23604],[53.48009,-2.23586],[53.47888,-2.23424]],"mode":"walk"},"hotel>piccadilly":{"m":326,"s":263,"path":[[53.47888,-2.23424],[53.47887,-2.23427],[53.4786,-2.23398],[53.47854,-2.23383],[53.4785,-2.23386],[53.47835,-2.23368],[53.47844,-2.23331],[53.47827,-2.23319],[53.47807,-2.23218],[53.47798,-2.23181],[53.4779,-2.23165],[53.47757,-2.23069],[53.47741,-2.23079]],"mode":"walk"}};

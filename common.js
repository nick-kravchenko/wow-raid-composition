(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "E4OH":
/*!**************************************************!*\
  !*** ./src/app/_entities/character-rank.enum.ts ***!
  \**************************************************/
/*! exports provided: CharacterRank */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterRank", function() { return CharacterRank; });
var CharacterRank;
(function (CharacterRank) {
    CharacterRank["main"] = "Main";
    CharacterRank["alt"] = "Alt";
})(CharacterRank || (CharacterRank = {}));


/***/ }),

/***/ "Fn0B":
/*!***************************************!*\
  !*** ./src/app/_data/players.data.ts ***!
  \***************************************/
/*! exports provided: players */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "players", function() { return players; });
/* harmony import */ var _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_entities/character-class.enum */ "k+SJ");
/* harmony import */ var _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_entities/character-rank.enum */ "E4OH");
/* harmony import */ var _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_entities/character-role.enum */ "YQ3A");



const players = [
    {
        name: 'Krava',
        discord: { userId: '341841825847574528' },
        characters: [
            { name: 'Krava', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].main, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].melee, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].warrior },
            { name: 'Kravà', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].ranged, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].warlock },
            { name: 'Kravá', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].ranged, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].hunter },
            { name: 'Kravâ', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].melee, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].druid },
        ]
    },
    {
        name: 'Vindsval',
        discord: { userId: '334727140241047553' },
        characters: [
            { name: 'Vindsval', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].main, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].melee, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].warrior },
            { name: 'Watain', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].ranged, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].hunter },
            { name: 'Necrolust', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].ranged, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].warlock },
        ]
    },
    {
        name: 'Lloydaustin',
        discord: { userId: '625411819334270976' },
        characters: [
            { name: 'Lloydaustin', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].main, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].melee, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].warrior },
            { name: 'Rkin', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].melee, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].rogue },
        ]
    },
    {
        name: 'Sion',
        discord: { userId: '1172462949818970133' },
        characters: [
            { name: 'Sion', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].main, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].melee, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].warrior },
        ]
    },
    {
        name: 'Strike',
        discord: { userId: '235195687996882954' },
        characters: [
            { name: 'Strike', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].main, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].ranged, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].warlock },
            { name: 'Strikerok', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].melee, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].warrior },
        ]
    },
    {
        name: 'Sckold',
        discord: { userId: '335448138129211403' },
        characters: [
            { name: 'Sckold', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].main, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].melee, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].rogue },
            { name: 'Holighty', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].healer, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].paladin },
        ]
    },
    {
        name: 'Ryzha',
        discord: { userId: '128246284447514624' },
        characters: [
            { name: 'Ryzha', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].main, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].healer, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].priest },
            { name: 'Ryzhâ', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].healer, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].priest },
        ]
    },
    {
        name: 'Ensitu',
        discord: { userId: '471337826781495297' },
        characters: [
            { name: 'Ensitu', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].main, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].tank, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].paladin },
            { name: 'Darqsat', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].melee, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].rogue },
            { name: 'Darqsad', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].healer, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].priest },
            { name: 'Fixik', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].ranged, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].mage },
            { name: 'Akantamebiaz', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].melee, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].druid },
        ]
    },
    {
        name: 'Gachimane',
        discord: { userId: '149965981081534466' },
        characters: [
            { name: 'Gachimane', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].main, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].melee, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].paladin },
            { name: 'Pozhezha', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].ranged, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].mage },
            { name: 'Watchmeflex', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].melee, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].warrior },
        ]
    },
    {
        name: 'Panibavovna',
        discord: { userId: '352895751082213377' },
        characters: [
            { name: 'Panibavovna', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].main, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].melee, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].paladin },
        ]
    },
    {
        name: 'Fleolix',
        discord: { userId: '1145300919152541757' },
        characters: [
            { name: 'Fleolix', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].main, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].ranged, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].hunter },
            { name: 'Fleo', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].melee, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].paladin },
        ]
    },
    {
        name: 'Odessit',
        discord: { userId: '185128538741932032' },
        characters: [
            { name: 'Odessit', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].main, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].ranged, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].hunter },
        ]
    },
    {
        name: 'Dartuas',
        discord: { userId: '224987565806059530' },
        characters: [
            { name: 'Dartuas', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].main, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].melee, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].druid },
            { name: 'Dartuasik', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].healer, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].priest },
        ]
    },
    {
        name: 'Artshaper',
        // discord: { userId: '224987565806059530' },
        characters: [
            { name: 'Artshaper', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].main, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].melee, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].druid },
            { name: 'Artholylight', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].melee, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].paladin },
            { name: 'Artinrage', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].melee, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].warrior },
            { name: 'Artsinister', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].melee, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].rogue },
            { name: 'Artilery', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].ranged, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].hunter },
            { name: 'Vognikvognik', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].ranged, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].mage },
        ]
    },
    {
        name: 'Elidisa',
        discord: { userId: '521657297693573120' },
        characters: [
            { name: 'Elidisa', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].main, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].healer, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].druid },
        ]
    },
    {
        name: 'Drulka',
        discord: { userId: '294155492027006989' },
        characters: [
            { name: 'Drulka', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].main, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].healer, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].druid },
            { name: 'Niameya', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].alt, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].melee, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].warrior },
        ]
    },
    {
        name: 'Tamioka',
        discord: { userId: '1012404881656647720' },
        characters: [
            { name: 'Tamioka', level: 25, rank: _entities_character_rank_enum__WEBPACK_IMPORTED_MODULE_1__["CharacterRank"].main, role: _entities_character_role_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterRole"].ranged, class: _entities_character_class_enum__WEBPACK_IMPORTED_MODULE_0__["CharacterClass"].mage },
        ]
    },
];


/***/ }),

/***/ "YQ3A":
/*!**************************************************!*\
  !*** ./src/app/_entities/character-role.enum.ts ***!
  \**************************************************/
/*! exports provided: CharacterRole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterRole", function() { return CharacterRole; });
var CharacterRole;
(function (CharacterRole) {
    CharacterRole["tank"] = "Tank";
    CharacterRole["healer"] = "Healer";
    CharacterRole["melee"] = "Melee";
    CharacterRole["ranged"] = "Ranged";
})(CharacterRole || (CharacterRole = {}));


/***/ }),

/***/ "k+SJ":
/*!***************************************************!*\
  !*** ./src/app/_entities/character-class.enum.ts ***!
  \***************************************************/
/*! exports provided: CharacterClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterClass", function() { return CharacterClass; });
var CharacterClass;
(function (CharacterClass) {
    CharacterClass["warrior"] = "Warrior";
    CharacterClass["paladin"] = "Paladin";
    CharacterClass["hunter"] = "Hunter";
    CharacterClass["druid"] = "Druid";
    CharacterClass["rogue"] = "Rogue";
    CharacterClass["warlock"] = "Warlock";
    CharacterClass["mage"] = "Mage";
    CharacterClass["priest"] = "Priest";
})(CharacterClass || (CharacterClass = {}));


/***/ })

}]);
//# sourceMappingURL=common.js.map
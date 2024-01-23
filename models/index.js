const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.bokse = require("./boks.js")(sequelize, Sequelize);
db.fakture = require("./faktuur.js")(sequelize, Sequelize);
db.kleure = require("./kleur.js")(sequelize, Sequelize);
db.kultivars = require("./kultivar.js")(sequelize, Sequelize);
db.loads = require("./load.js")(sequelize, Sequelize);
db.markte = require("./mark.js")(sequelize, Sequelize);
db.transaksies = require("./transaksie.js")(sequelize, Sequelize);
db.palette = require("./palet.js")(sequelize, Sequelize);
db.plekke = require("./plek.js")(sequelize, Sequelize);
db.produsente = require("./produsent.js")(sequelize, Sequelize);
db.pryse = require("./prys.js")(sequelize, Sequelize);
db.roetes = require("./roete.js")(sequelize, Sequelize);
db.stacks = require("./stack.js")(sequelize, Sequelize);
db.tipes = require("./tipe.js")(sequelize, Sequelize);
db.uitlaaie = require("./uitlaai.js")(sequelize, Sequelize);
db.verkopes = require("./verkope.js")(sequelize, Sequelize);
db.verpakkings = require("./verpakking.js")(sequelize, Sequelize);
db.vervoerders = require("./vervoerder.js")(sequelize, Sequelize);
db.vragte = require("./vrag.js")(sequelize, Sequelize);
db.weke = require("./week.js")(sequelize, Sequelize);

//Associations

//kultivars + kleure
db.kleure.hasMany(db.kultivars, {as: "kultivars"});
db.kultivars.belongsTo(db.kleure, {
  foreignKey: "kleurId",
  as: "kleur"
});

//fakture + tipes
db.tipes.hasMany(db.fakture, {as: "fakture"});
db.fakture.belongsTo(db.tipes, {
  foreignKey: "tipeId",
  as: "tipe"
});

//uitlaaie + vervoerders
db.vervoerders.hasMany(db.uitlaaie, {as: "uitlaaie"});
db.uitlaaie.belongsTo(db.vervoerders, {
  foreignKey: "vervoerderId",
  as: "vervoerder"
});

//verkopes + verpakkings
db.verpakkings.hasMany(db.verkopes, {as: "verkopes"});
db.verkopes.belongsTo(db.verpakkings, {
  foreignKey: "verpakkingId",
  as: "verpakking"
});



//loads - roetes + uitlaaie + palette
//roetes - markte + plekke

//db.markte.belongsToMany(db.plekke, { through: "roetes", foreignKey: "markId"});
//db.plekke.belongsToMany(db.markte, { through: "roetes", foreignKey: "plekId"});


//loads + roetes
db.roetes.hasMany(db.loads, {as: "loads"});
db.loads.belongsTo(db.roetes, {
  foreignKey: "roeteId",
  as: "roete"
});

//roetes + plekke
db.plekke.hasMany(db.roetes, {as: "roetes"});
db.roetes.belongsTo(db.plekke, {
  foreignKey: "plekId",
  as: "plek"
});

//roetes + markte
db.markte.hasMany(db.roetes, {as: "roetes"});
db.roetes.belongsTo(db.markte, {
  foreignKey: "markId",
  as: "markte"
});


//uitlaaie + loads
db.uitlaaie.hasMany(db.loads, {as: "loads"});
db.loads.belongsTo(db.uitlaaie, {
  foreignKey: "uitlaaiId",
  as: "uitlaai"
});

//palette + loads
db.palette.hasMany(db.loads, {as: "loads"});
db.loads.belongsTo(db.palette, {
  foreignKey: "paletId",
  as: "palet"
});

//stacks - vragte + palette
//db.vragte.belongsToMany(db.palette, { through: "stacks" });
//db.palette.belongsToMany(db.vragte, { through: "stacks" });

//stacks + vragte
db.vragte.hasMany(db.stacks, {as: "stacks"});
db.stacks.belongsTo(db.vragte, {
  foreignKey: "vragId",
  as: "vrag"
});

//stacks + palette
db.palette.hasMany(db.stacks, {as: "stacks"});
db.stacks.belongsTo(db.palette, {
  foreignKey: "paletId",
  as: "palet"
});

//vragte + kultivars
db.kultivars.hasMany(db.vragte, {as: "vragte"});
db.vragte.belongsTo(db.kultivars, {
  foreignKey: "kultivarId",
  as: "kultivar"
});

//vragte + produsente
db.produsente.hasMany(db.vragte, {as: "vragte"});
db.vragte.belongsTo(db.produsente, {
  foreignKey: "produsentId",
  as: "produsent"
});

//vragte + pryse
db.pryse.hasMany(db.vragte, {as: "vragte"});
db.vragte.belongsTo(db.pryse, {
  foreignKey: "prysId",
  as: "prys"
});

//vragte + bokse
db.bokse.hasMany(db.vragte, {as: "vragte"});
db.vragte.belongsTo(db.bokse, {
  foreignKey: "boksId",
  as: "boks"
});

//vragte + transaksies


db.stacks.hasMany(db.transaksies, {as: "transaksies"});
db.transaksies.belongsTo(db.stacks, {
  foreignKey: "stackId",
  as: "stack"
});

//pryse + weke
db.weke.hasMany(db.pryse, {as: "pryse"});
db.pryse.belongsTo(db.weke, {
  foreignKey: "weekId",
  as: "week"
});

//pryse + kultivars
db.kultivars.hasMany(db.pryse, {as: "pryse"});
db.pryse.belongsTo(db.kultivars, {
  foreignKey: "kultivarId",
  as: "kultivar"
});

//produsente + verkope
db.produsente.hasMany(db.verkopes, {as: "verkopes"});
db.verkopes.belongsTo(db.produsente, {
  foreignKey: "produsentId",
  as: "produsent"
});

//fakture + verkope
db.fakture.hasMany(db.verkopes, {as: "verkopes"});
db.verkopes.belongsTo(db.fakture, {
  foreignKey: "faktuurId",
  as: "faktuur"
});

//fakture + vragte
db.fakture.hasMany(db.vragte, {as: "vragte"});
db.vragte.belongsTo(db.fakture, {
  foreignKey: "faktuurId",
  as: "faktuur"
});

//transaksies + fakture
db.fakture.hasMany(db.transaksies, {as: "transaksies"});
db.transaksies.belongsTo(db.fakture, {
  foreignKey: "faktuurId",
  as: "faktuur"
});

//edits
//roetes does not have 'id'....?????!wtf
//vragte double fks -> bokId, boksId, pryId, PrysId. WTF!???????

module.exports = db;

/* tuts index
const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
module.exports = db;
*/
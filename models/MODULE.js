/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('MODULE', {
		MODULE_ID: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		MODULE_DESCR: {
			type: DataTypes.STRING,
			allowNull: false
		},
		MAIN_MENU_CAPTION: {
			type: DataTypes.STRING,
			allowNull: true
		},
		MENU_CAPTION: {
			type: DataTypes.STRING,
			allowNull: false
		},
		MENU_TOOLTIP: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CALL_PROCEDURE: {
			type: DataTypes.STRING,
			allowNull: true
		},
		FACE_ID: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		MENU_ORDER: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		START_MENU_GROUP: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		ENABLE: {
			type: DataTypes.CHAR,
			allowNull: true
		},
		MODULE_INFO: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ACTION_EDIT: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		ACTION_INSERT: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		ACTION_DELETE: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		ACTION_BANK_DETAILS_EDIT: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		ACTION_SUN_IMPORT: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'MODULE',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};

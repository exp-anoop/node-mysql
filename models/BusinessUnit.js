/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('BusinessUnit', {
		BusinessUnitId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		BusinessUnitName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		BussinessHead: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'BusinessUnit',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};

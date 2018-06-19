/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Settings', {
		KeyData: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		ValueData: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'Settings',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};

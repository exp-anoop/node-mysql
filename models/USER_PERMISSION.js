/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('USER_PERMISSION', {
		UserId: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		MODULE_ID: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'USER_PERMISSION',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};

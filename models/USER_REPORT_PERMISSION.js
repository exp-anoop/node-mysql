/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('USER_REPORT_PERMISSION', {
		LOGIN_ID: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		REPORT_ID: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		tableName: 'USER_REPORT_PERMISSION',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};

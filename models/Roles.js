/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Roles', {
		RoleId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		RoleName: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'Roles',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};

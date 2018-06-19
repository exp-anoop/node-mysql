/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ProjectStatus', {
		ProjectStatusId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true
		},
		ProjectStatus: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		tableName: 'ProjectStatus',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};

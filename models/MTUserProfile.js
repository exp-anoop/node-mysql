/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('MTUserProfile', {
		ProfileID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ProfileName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		UserId: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		FilterID: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'MTUserProfile',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};

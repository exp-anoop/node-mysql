/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Activities', {
		ActivityId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ActivityCode: {
			type: DataTypes.STRING,
			allowNull: false
		},
		ActivityDescription: {
			type: DataTypes.STRING,
			allowNull: false
		},
		IsActive: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '1'
		}
	}, {
		tableName: 'Activities',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};

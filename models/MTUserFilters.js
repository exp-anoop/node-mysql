/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('MTUserFilters', {
		FilterID: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		MonthID: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ProjectID: {
			type: DataTypes.STRING,
			allowNull: true
		},
		SkillID: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ManagerID: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ResourceID: {
			type: DataTypes.STRING,
			allowNull: true
		},
		StatusID: {
			type: DataTypes.STRING,
			allowNull: true
		},
		SearchKey: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Year: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		QuarterID: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'MTUserFilters',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};

/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Projects21April2015', {
		ProjectId: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Code: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Description: {
			type: DataTypes.STRING,
			allowNull: false
		},
		StartDate: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Status: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		EffortBudget: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		CostBudget: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		ProjectStatus: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		HideFromTimesheet: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		}
	}, {
		tableName: 'Projects21April2015',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};

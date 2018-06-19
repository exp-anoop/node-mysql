/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Projects', {
		ProjectId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
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
			allowNull: false,
			defaultValue: '((1))',
			references: {
				model: 'ProjectStatus',
				key: 'ProjectStatusId'
			}
		},
		HideFromTimesheet: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		},
		BusinessUnitId: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		ContractValue: {
			type: DataTypes.DECIMAL,
			allowNull: true
		},
		EndDate: {
			type: DataTypes.DATE,
			allowNull: true
		},
		ProjectManagerId: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		FinalStatus: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		}
	}, {
		tableName: 'Projects',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};

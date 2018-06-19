/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Timesheets', {
		TimesheetId: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		UserId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'USER_DEFN',
				key: 'UserId'
			}
		},
		ProjectId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'Projects',
				key: 'ProjectId'
			}
		},
		ActivityId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'Activities',
				key: 'ActivityId'
			}
		},
		TimesheetDate: {
			type: DataTypes.DATE,
			allowNull: false
		},
		Task: {
			type: DataTypes.STRING,
			allowNull: false
		},
		Duration: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		Remarks: {
			type: DataTypes.STRING,
			allowNull: true
		},
		TicketID: {
			type: DataTypes.STRING,
			allowNull: true
		},
		CreatedDate: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: '(getdate())'
		},
		BusinessUnitId: {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'Timesheets',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};

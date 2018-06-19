/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TimesheetsOld', {
		TimesheetId: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		UserId: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		ProjectId: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		ActivityId: {
			type: DataTypes.INTEGER,
			allowNull: false
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
		}
	}, {
		tableName: 'TimesheetsOld',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};

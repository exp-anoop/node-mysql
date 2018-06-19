/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('MTUserAllocation', {
		Id: {
			type: DataTypes.INTEGER,
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
		WeekStartDate: {
			type: DataTypes.DATE,
			allowNull: false
		},
		Hour: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		UserStatusId: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		IsLongTerm: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		}
	}, {
		tableName: 'MTUserAllocation',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};

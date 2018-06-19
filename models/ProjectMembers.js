/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ProjectMembers', {
		ProjectMemberId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ProjectId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'Projects',
				key: 'ProjectId'
			}
		},
		UserId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'USER_DEFN',
				key: 'UserId'
			}
		},
		RoleId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'Roles',
				key: 'RoleId'
			}
		},
		IsActive: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: '1'
		}
	}, {
		tableName: 'ProjectMembers',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};

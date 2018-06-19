/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('MTDashboard', {
		Id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		UserId: {
			type: DataTypes.INTEGER,
			allowNull: true,
			references: {
				model: 'USER_DEFN',
				key: 'UserId'
			}
		},
		ProjectAndOrder: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ProfileName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		ModuleName: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'MTDashboard',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};

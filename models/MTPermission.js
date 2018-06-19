/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('MTPermission', {
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
		}
	}, {
		tableName: 'MTPermission',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};

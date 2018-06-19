/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('EmpList', {
		EmpId: {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		FullName: {
			type: DataTypes.STRING,
			allowNull: true
		},
		OfficialEmail: {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'EmpList',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};

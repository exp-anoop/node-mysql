/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('MTUserSkill', {
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
		SkillId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'MTSkill',
				key: 'Id'
			}
		}
	}, {
		tableName: 'MTUserSkill',
		freezeTableName: true,
		timestamps: false,
		createdAt: false,
		updatedAt: false
	});
};

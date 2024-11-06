//
// Code generated by go-jet DO NOT EDIT.
//
// WARNING: Changes to this file may cause incorrect behavior
// and will be lost if the code is regenerated
//

package table

import (
	"github.com/go-jet/jet/v2/postgres"
)

var OrganizationMemberInvite = newOrganizationMemberInviteTable("public", "OrganizationMemberInvite", "")

type organizationMemberInviteTable struct {
	postgres.Table

	// Columns
	UniqueId        postgres.ColumnString
	CreatedAt       postgres.ColumnTimestampz
	UpdatedAt       postgres.ColumnTimestampz
	Slug            postgres.ColumnString
	Email           postgres.ColumnString
	AccessLevel     postgres.ColumnString
	OrganizationId  postgres.ColumnString
	Status          postgres.ColumnString
	InvitedByUserId postgres.ColumnString

	AllColumns     postgres.ColumnList
	MutableColumns postgres.ColumnList
}

type OrganizationMemberInviteTable struct {
	organizationMemberInviteTable

	EXCLUDED organizationMemberInviteTable
}

// AS creates new OrganizationMemberInviteTable with assigned alias
func (a OrganizationMemberInviteTable) AS(alias string) *OrganizationMemberInviteTable {
	return newOrganizationMemberInviteTable(a.SchemaName(), a.TableName(), alias)
}

// Schema creates new OrganizationMemberInviteTable with assigned schema name
func (a OrganizationMemberInviteTable) FromSchema(schemaName string) *OrganizationMemberInviteTable {
	return newOrganizationMemberInviteTable(schemaName, a.TableName(), a.Alias())
}

// WithPrefix creates new OrganizationMemberInviteTable with assigned table prefix
func (a OrganizationMemberInviteTable) WithPrefix(prefix string) *OrganizationMemberInviteTable {
	return newOrganizationMemberInviteTable(a.SchemaName(), prefix+a.TableName(), a.TableName())
}

// WithSuffix creates new OrganizationMemberInviteTable with assigned table suffix
func (a OrganizationMemberInviteTable) WithSuffix(suffix string) *OrganizationMemberInviteTable {
	return newOrganizationMemberInviteTable(a.SchemaName(), a.TableName()+suffix, a.TableName())
}

func newOrganizationMemberInviteTable(schemaName, tableName, alias string) *OrganizationMemberInviteTable {
	return &OrganizationMemberInviteTable{
		organizationMemberInviteTable: newOrganizationMemberInviteTableImpl(schemaName, tableName, alias),
		EXCLUDED:                      newOrganizationMemberInviteTableImpl("", "excluded", ""),
	}
}

func newOrganizationMemberInviteTableImpl(schemaName, tableName, alias string) organizationMemberInviteTable {
	var (
		UniqueIdColumn        = postgres.StringColumn("UniqueId")
		CreatedAtColumn       = postgres.TimestampzColumn("CreatedAt")
		UpdatedAtColumn       = postgres.TimestampzColumn("UpdatedAt")
		SlugColumn            = postgres.StringColumn("Slug")
		EmailColumn           = postgres.StringColumn("email")
		AccessLevelColumn     = postgres.StringColumn("AccessLevel")
		OrganizationIdColumn  = postgres.StringColumn("OrganizationId")
		StatusColumn          = postgres.StringColumn("Status")
		InvitedByUserIdColumn = postgres.StringColumn("InvitedByUserId")
		allColumns            = postgres.ColumnList{UniqueIdColumn, CreatedAtColumn, UpdatedAtColumn, SlugColumn, EmailColumn, AccessLevelColumn, OrganizationIdColumn, StatusColumn, InvitedByUserIdColumn}
		mutableColumns        = postgres.ColumnList{CreatedAtColumn, UpdatedAtColumn, SlugColumn, EmailColumn, AccessLevelColumn, OrganizationIdColumn, StatusColumn, InvitedByUserIdColumn}
	)

	return organizationMemberInviteTable{
		Table: postgres.NewTable(schemaName, tableName, alias, allColumns...),

		//Columns
		UniqueId:        UniqueIdColumn,
		CreatedAt:       CreatedAtColumn,
		UpdatedAt:       UpdatedAtColumn,
		Slug:            SlugColumn,
		Email:           EmailColumn,
		AccessLevel:     AccessLevelColumn,
		OrganizationId:  OrganizationIdColumn,
		Status:          StatusColumn,
		InvitedByUserId: InvitedByUserIdColumn,

		AllColumns:     allColumns,
		MutableColumns: mutableColumns,
	}
}

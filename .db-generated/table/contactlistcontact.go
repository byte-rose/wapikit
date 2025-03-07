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

var ContactListContact = newContactListContactTable("public", "ContactListContact", "")

type contactListContactTable struct {
	postgres.Table

	// Columns
	CreatedAt     postgres.ColumnTimestampz
	UpdatedAt     postgres.ColumnTimestampz
	ContactListId postgres.ColumnString
	ContactId     postgres.ColumnString

	AllColumns     postgres.ColumnList
	MutableColumns postgres.ColumnList
}

type ContactListContactTable struct {
	contactListContactTable

	EXCLUDED contactListContactTable
}

// AS creates new ContactListContactTable with assigned alias
func (a ContactListContactTable) AS(alias string) *ContactListContactTable {
	return newContactListContactTable(a.SchemaName(), a.TableName(), alias)
}

// Schema creates new ContactListContactTable with assigned schema name
func (a ContactListContactTable) FromSchema(schemaName string) *ContactListContactTable {
	return newContactListContactTable(schemaName, a.TableName(), a.Alias())
}

// WithPrefix creates new ContactListContactTable with assigned table prefix
func (a ContactListContactTable) WithPrefix(prefix string) *ContactListContactTable {
	return newContactListContactTable(a.SchemaName(), prefix+a.TableName(), a.TableName())
}

// WithSuffix creates new ContactListContactTable with assigned table suffix
func (a ContactListContactTable) WithSuffix(suffix string) *ContactListContactTable {
	return newContactListContactTable(a.SchemaName(), a.TableName()+suffix, a.TableName())
}

func newContactListContactTable(schemaName, tableName, alias string) *ContactListContactTable {
	return &ContactListContactTable{
		contactListContactTable: newContactListContactTableImpl(schemaName, tableName, alias),
		EXCLUDED:                newContactListContactTableImpl("", "excluded", ""),
	}
}

func newContactListContactTableImpl(schemaName, tableName, alias string) contactListContactTable {
	var (
		CreatedAtColumn     = postgres.TimestampzColumn("CreatedAt")
		UpdatedAtColumn     = postgres.TimestampzColumn("UpdatedAt")
		ContactListIdColumn = postgres.StringColumn("ContactListId")
		ContactIdColumn     = postgres.StringColumn("ContactId")
		allColumns          = postgres.ColumnList{CreatedAtColumn, UpdatedAtColumn, ContactListIdColumn, ContactIdColumn}
		mutableColumns      = postgres.ColumnList{CreatedAtColumn, UpdatedAtColumn}
	)

	return contactListContactTable{
		Table: postgres.NewTable(schemaName, tableName, alias, allColumns...),

		//Columns
		CreatedAt:     CreatedAtColumn,
		UpdatedAt:     UpdatedAtColumn,
		ContactListId: ContactListIdColumn,
		ContactId:     ContactIdColumn,

		AllColumns:     allColumns,
		MutableColumns: mutableColumns,
	}
}

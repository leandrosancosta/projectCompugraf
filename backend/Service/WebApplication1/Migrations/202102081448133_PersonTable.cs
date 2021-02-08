namespace Service.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PersonTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.People",
                c => new
                    {
                        ID = c.Int(nullable: false, identity: true),
                        Name = c.String(unicode: false),
                        Nationality = c.String(unicode: false),
                        ZIPCode = c.String(unicode: false),
                        UF = c.String(unicode: false),
                        City = c.String(unicode: false),
                        Address = c.String(unicode: false),
                        Email = c.String(unicode: false),
                        Telephone = c.String(unicode: false),
                    })
                .PrimaryKey(t => t.ID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.People");
        }
    }
}

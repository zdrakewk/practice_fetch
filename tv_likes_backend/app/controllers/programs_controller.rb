class ProgramsController < ApplicationController
  before_action :set_program, only: :show

  def index # display list of Programs 
    @programs = Program.all

    render json: @programs
  end

  def show
    render json: @program
  end

  def create # save a new obj in db
    prg_obj = Programs.new(program_params)
    # create a character w/the program
    # prg_obj.characters.build(char_attrs) # <~ from has_many assoc
  end

  private
  def set_program
    @program = Program.find(params[:id])
  end

  def program_params # strong params, used in create & update, to quick obj attr assignment
    # persist good data via only allowing specific attr 2 come in
    params.require(:program).permit(:title, :description, :likes)

    # params = {
    #   program: {
    #     :title, 
    #     :description, 
    #     :likes
    #   }
    # }
  end


end
